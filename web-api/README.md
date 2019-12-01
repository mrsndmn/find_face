
# Installation


## Install deps
```
cd web-api
python3 -m venv venv
source ./venv/bin/activate
pip3 install -r requirements.txt
export VKAPPS_SECRET_KEY=<your secret key>
```

## Run tests

```
cd web-api/tests
python3 test_api.py
```
## Run server 
```
cd web-api
python3 api.py
```
