import asyncio
import aiohttp
import aiofiles
import logging

import concurrent.futures
import aiotasks

# from .manager import manager
from queues.vk.user import VKUser
from aiotasks import build_manager, send_task

from mlmodel.face_recognizer import face_comparator, FacesError

manager = build_manager(dsn="redis://localhost:6379")

async def download_image_to_file(url, fname):
    async with aiohttp.ClientSession() as session:
        async with session.get(url) as resp:
            if resp.status == 200:
                fname = f"photos/{fname}"
                print(f"fname {fname}")
                f = await aiofiles.open(fname, mode='wb')
                await f.write(await resp.read())
                await f.close()
                print(f"{fname} was uploaded")

@manager.task()
async def get_friends_deeply(user_id):
    print("got user:", user_id)
    deep_friends = VKUser(user_id).get_friends_deep()

    serialisable_deep_friends = [
        {'id': f.id, "photo_200": f.photo_200} for f in deep_friends if f.photo_200 is not None
    ]

    await send_task("download_photo", args=(serialisable_deep_friends,))
    return deep_friends

@manager.task()
async def download_photo(friends_list):
    '''
    Ассинхронно обкачивает фотки пользователей
    Для того, чтобы добавить задачу для этого обработчика
    ```
        from queues.worker.manager import manager
        await manager.publish("download_photo", users_list)
    ```
    '''
    async_tasks = []

    print(f"working on {len(friends_list)} len friends_list")
    for friend in friends_list:
        print(friend)
        if "photo_200" not in friend:
            continue
        friend_id = friend["id"]
        photo_url = friend["photo_200"]
        async_tasks.append(download_image_to_file(photo_url, f"{friend_id}.jpg"))
    await asyncio.gather(*async_tasks, return_exceptions=True)

    print(f"downloaded {len(friends_list)} friends photo")

    return

@manager.task()
async def recognozer(friends_list, target_photo):
    '''
    Ищет схожие фотографии
    '''

    comparator = face_comparator(target_photo)

    recognozed = []
    for friend in friends_list:
        uid = friend['id']
        fname = f'photos/{uid}.jpg'

        if comparator.check_faces(fname):
            recognozed.append(uid)

    return


async def generate_tasks():
    # NON-BLOCKING WAITING FOR RESPONSE
    print("adding task to queue")
    await send_task("get_friends_deeply", args=(57436196,))

if __name__ == "__main__":  # pragma no cover
    manager.loop.run_until_complete(generate_tasks())