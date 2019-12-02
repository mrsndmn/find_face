import vk_api
import copy

import logging
import sys
import os
import random

vk_users_db = dict()

class VKUser:
    '''
    Класс для работы с пользователями вк
    todo: добавить возможность асиинхронной работы с апи вк
    '''

    session = vk_api.VkApi(token=os.environ['VKAPPS_TOKEN'])
    community_session = vk_api.VkApi(token=os.environ['VK_COMMUNITY_TOKEN'])
    MAX_FRIENDS_COUNT = 10

    def __init__(self, vkid, photo_200=None, is_private=False, first_name=None):
        self.id = vkid
        self.friends = []
        self.photo_200 = photo_200
        self.first_name = first_name
        self.is_private = False

        if self.id in vk_users_db:
            self = vk_users_db[self.id]
        else:
            self.get_info()
            vk_users_db[self.id] = self
        return

    def __repr__(self):
        return f"({self.id}): {self.photo_200}"

    def __str__(self):
        return f"({self.id}): {self.photo_200}"

    @classmethod
    def from_vk_object(self, vk_user_obj):
        return VKUser(vk_user_obj['id'], photo_200=vk_user_obj.get('photo_200'), first_name=vk_user_obj.get("first_name"))

    def saved_in_db(self):
        return self.id in vk_users_db

    def get_info(self, fields=None, force_update=False):
        if self.id in vk_users_db:
            return vk_users_db[self.id]
        if fields is None:
            fields = ['photo_200']
        vk_resp = self.session.method("users.get",
                                {"user_ids": self.id, "fields": fields})
        vk_resp = vk_resp[0]
        self.photo_200 = vk_resp.get('photo_200')
        vk_users_db[self.id] = self
        return vk_resp

    def get_friends(self, force_update=False):
        if len(self.friends) > 0:
            return self.friends

        vk_ret = self.session.method("friends.get",
                                {"user_id": self.id,
                                 "count": self.MAX_FRIENDS_COUNT,
                                 "fields": "photo_200"})

        self.friends = [self.from_vk_object(f) for f in vk_ret['items']]

        logging.info(f'({self.id}) friends => {vk_ret}')
        return self.friends

    def get_friends_deep(self, depth=0, max_depth=3, async_mode=False):
        depth += 1
        if depth >= max_depth:
            return []

        friends = []
        try:
            friends = self.get_friends(force_update=False)
            logging.info(f"friends: {friends}")
        except vk_api.ApiError:
            self.is_private = True
            logging.warn(f"{self.id} is private")
            return []
        logging.info(f"friends: {friends}")

        # друзья 1 уровня
        already_in = dict.fromkeys([f.id for f in friends], True)
        result = copy.copy(friends)
        for user in friends:
            logging.info(f"working on user {user}")
            # todo раз в какое-то время надо перегружать список друзей
            # if async_mode:
                # import asyncio
                # await asyncio.sleep(0.5)

            more_deep_friends = user.get_friends_deep(depth=depth, max_depth=max_depth)
            logging.info(f"more_deep_friends: {more_deep_friends}")
            for deep_friend in more_deep_friends:
                if deep_friend not in already_in:
                    already_in[deep_friend.id] = True
                result.append(deep_friend)

        return result

    def send_recognozed_notification(self, recognozed):
        message = "Sorry, we dont know who is on your photo"

        if len(recognozed) > 0:
            message = "Found theese users: " + ", ".join([ f"@id{u['id']} ({u['first_name']})" for u in recognozed ])

        self.community_session.method("messages.send", {"user_id": self.id,
                                              "message": message,
                                              "random_id": random.random()}) # todo make real random

# await download_all_friends(friends_list)