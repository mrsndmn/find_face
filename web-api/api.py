import os
from flask import Flask, request, jsonify
from flask_restful import Api, Resource
from flask_cors import CORS
from werkzeug.utils import secure_filename
from base64 import b64encode
from collections import OrderedDict
from hashlib import sha256
from hmac import HMAC
from urllib.parse import urlparse, parse_qsl, urlencode
import json


app = Flask(__name__)
cors = CORS(app, resources={r"/*": {"origins": "*"}})
api = Api(app)
UPLOAD_FOLDER = '/tmp/'
ALLOWED_EXTENSIONS = set(['pnxg', 'jpg', 'jpeg', 'gif'])
app.config['UPLOAD_FOLDER'] = UPLOAD_FOLDER
app.config['MAX_CONTENT_LENGTH'] = 16 * 1024 * 1024  # 16mb

''' url_example = "https://example.com/?vk_user_id=494075&
vk_app_id=6736218&vk_is_app_user=1
&vk_are_notifications_enabled=1&vk_language=ru&
vk_access_token_settings=&vk_platform=android
&sign=exTIBPYTrAKDTHLLm2AwJkmcVcvFCzQUNyoa6wAjvW6k"'''
client_secret = "qmvVitWxyuk5dJBwt8PG"  # Защищённый ключ из настроек вашего приложения


def is_valid(*, query: dict, secret: str) -> bool:
    """Check VK Apps signature"""
    vk_subset = OrderedDict(sorted(x for x in query.items() if x[0][:3] == "vk_"))
    hash_code = b64encode(HMAC(secret.encode(), urlencode(vk_subset, doseq=True).encode(), sha256).digest())
    decoded_hash_code = hash_code.decode('utf-8')[:-1].replace('+', '-').replace('/', '_')
    return query["sign"] == decoded_hash_code


def allowed_file(filename):
    return '.' in filename and \
           filename.rsplit('.', 1)[1] in ALLOWED_EXTENSIONS


def savefile(file):
    try:
        file.save(os.path.join(app.config['UPLOAD_FOLDER'], file.filename))
        return True
    except:
        return False


@app.route("/test_sign", methods=['POST'])
def test_sign():
    query_params = json.loads(request.headers["vkheaders"])
    print(query_params)  # test
    status = is_valid(query=query_params, secret=client_secret)
    if not status:
        return "Mask off, man", 401
    return "Hello", 202


@app.route("/upload", methods=['POST'])
def upload_file():
    try:
        query_params = json.loads(request.headers["vkheaders"]) #500 error todo try except
    except:
        return "Wrong headers", 400
    print(query_params)  # test
    status = is_valid(query=query_params, secret=client_secret)
    if not status:
        return "Mask off, man", 401
    id_ = query_params["vk_app_id"]

    file = request.files["file"]
    if file.filename == '':
        return 'No selected file', 415
    if file and allowed_file(file.filename):
        filename = secure_filename(file.filename)
        if not savefile(file):
            return "Save error", 507
    else: 
        return "Filename error", 415

    try:
        push_in_queue(id_, filename)
    except:
        return "Push error", 520

    return True, 200


app.run()
