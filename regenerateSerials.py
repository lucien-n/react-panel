import json
import random

chars = "ABCDEFGHIJKLMNOPQRSTUVXYZ1234567890"

with open("./server/src/database.json", "r+") as f:
    data = json.load(f)

    for device in data["devices"]:
        serial = "".join([random.choice(chars) for _ in range(12)])
        device["serialNumber"] = serial

    f.seek(0)
    json.dump(data, f, indent=4)
    f.truncate()
