import asyncio

from queues.worker.manager import manager
import queues.worker.photoloader

async def generate_tasks():
    # NON-BLOCKING WAITING FOR RESPONSE
    print("adding task to queue")
    await manager.publish("get_friends_deeply_task", 57436196)

if __name__ == '__main__':
    manager.loop.run_until_complete(generate_tasks())
