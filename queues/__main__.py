import logging
import sys
import queues.worker.photoloader

from .worker.manager import manager

root = logging.getLogger()
root.setLevel(logging.INFO)

handler = logging.StreamHandler(sys.stdout)
handler.setLevel(logging.INFO)
formatter = logging.Formatter('%(asctime)s - %(name)s - %(levelname)s - %(message)s')
handler.setFormatter(formatter)
root.addHandler(handler)

def main():
    print("running queue manager")
    manager.loop.run_forever()

if __name__ == "__main__":  # pragma no cover
    main()