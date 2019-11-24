from collections import namedtuple
import requests
from requests_toolbelt.utils.dump import dump_all
import json

Urls = namedtuple('Urls', ['method', 'url', 'headers', 'json', 'data', 'files'])

head = {"sign":"pzg2GgR_Hzw-yE2lQ3vA5ArSoDFQgpDnxU9dBCDYDB0","vk_access_token_settings":"notify","vk_app_id":"7213580","vk_are_notifications_enabled":"0","vk_is_app_user":"1","vk_is_favorite":"0","vk_language":"ru","vk_platform":"desktop_web","vk_ref":"other","vk_user_id":"140862919"}
head_json = json.dumps(head)
head2 = {"sign":"pzg2GgR_Hzw-yE2lQ3vA5ArSoDFQgpDnxU9dBCDYDB1","vk_access_token_settings":"notify","vk_app_id":"7213580","vk_are_notifications_enabled":"0","vk_is_app_user":"1","vk_is_favorite":"0","vk_language":"ru","vk_platform":"desktop_web","vk_ref":"other","vk_user_id":"140862919"}
head_json2 = json.dumps(head2)

files1 = {'file': open('img1.jpg', 'rb')}
files2 = {'file': open('img2.txt', 'rb')}


with open('request_dumps.txt', 'w') as f:
    for index, url in enumerate([
        Urls('post', 'http://localhost:5000/test_sign', {"vkheaders": head_json} , None, None, None),
        Urls('post', 'http://localhost:5000/test_sign', {"vkheaders": head_json2} , None, None, None),
        Urls('post', 'http://localhost:5000/upload', {"vkheaders": head_json} , None, None, files1),
        Urls('post', 'http://localhost:5000/upload', {"vkheaders": head_json} , None, None, files2)
    ]):
        resp = requests.request(method=url.method, url=url.url, headers= url.headers, json=url.json, data=url.data, files=url.files)
        print(index, url, resp.status_code, resp.ok, file=f)
        # print(dump_all(resp).decode('utf-8'), file=f)
