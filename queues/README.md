
# Installation


## Install deps
```
cd queues
python3 -m venv venv
source ./venv/bin/activate
pip install -r requirements.txt
```

## Run tests

```
# no tests yet(
```

## Run queues workers

```
export VKAPPS_TOKEN=****
docker run -p 6379:6379 redis

# запустить разгребальщик
PYTHONPATH=. python -m aiotasks -d -vvv worker -A queues.worker.photoloader
# добавить задание в очередь
PYTHONPATH=. python queues/worker/photoloader.py
```