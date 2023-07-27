import json
import random
import time
import math

chars = "ABCDEFGHIJKLMNOPQRSTUVXYZ1234567890"

with open("./server/src/database.json", "r+") as f:
    data = json.load(f)

    for device in data["devices"]:
        deviceSerial = "".join([random.choice(chars) for _ in range(12)])
        device["serialNumber"] = deviceSerial

        deviceId = random.randint(1000, 9999)
        device["id"] = deviceId

        deviceModel = "".join([random.choice(chars) for _ in range(4)])
        device["model"] = deviceModel

        deviceSecurity = {
            "firewall": bool(random.randint(0, 4)),
            "antivirus": bool(random.randint(0, 4)),
            "encryption": bool(random.randint(0, 4)),
        }
        device["security"] = deviceSecurity

        deviceLastCheckInDate = math.floor(time.time()) - random.randint(
            10 * 24 * 3600, 32 * 24 * 3600
        )
        device["lastCheckInDate"] = deviceLastCheckInDate

    f.seek(0)
    json.dump(data, f, indent=4)
    f.truncate()
