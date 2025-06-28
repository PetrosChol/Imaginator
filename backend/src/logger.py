import os
import logging
import datetime as dt

LOG_FILE = f"{dt.datetime.now().strftime('%m_%d_%Y_%H_%M_%S')}.log"
loggings_path = os.path.join(os.getcwd(), "loggings", LOG_FILE)
os.makedirs(loggings_path, exist_ok=True)

LOG_FILE_PATH = os.path.join(loggings_path, LOG_FILE)


logging.basicConfig(
    filename=LOG_FILE_PATH,
    format="[%(asctime)s ] %(lineno)d %(name)s - %(levelname)s - %(message)s",
    level=logging.INFO,
)
