import vk
import os
from flask import Flask, request, jsonify
from flask_restful import Api, Resource
from werkzeug.utils import secure_filename


session = vk.Session(access_token='{токен авторизации}')
api_vk = vk.API(session)

app = Flask(__name__)
api = Api(app)
ALLOWED_EXTENSIONS = set(['png', 'jpg', 'jpeg', 'gif'])
app.config['UPLOAD_FOLDER'] = UPLOAD_FOLDER
app.config['MAX_CONTENT_LENGTH'] = 16 * 1024 * 1024  # 16mb


def allowed_file(filename):
    return '.' in filename and \
           filename.rsplit('.', 1)[1] in ALLOWED_EXTENSIONS

def savefile(file):
	try:
		file.save(os.path.join(app.config['UPLOAD_FOLDER'], file.filename))
		return True
	except:
		return False


@app.route("/upload", methods=['POST'])
def upload_file():
	try:
    	file = request.files["file"]
	except RequestEnityTooLarge as e:
    	return "Too large size", 413
    if file.filename == '':
        return 'No selected file', 415
    if file and allowed_file(file.filename):
        filename = secure_filename(file.filename)
        if savefile(file):
        	return filename, 202
	
	return False, 415


@app.route("/pushqueue", methods=['POST'])
def login():
    
    return '', 204
@app.route('/pushqueue/<filename>')
def pushqueue(filename):
    pushToQueue(filename, other_args)
