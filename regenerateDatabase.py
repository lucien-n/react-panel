import json
import random

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
            "firewall": bool(random.randint(0, 1)),
            "antivirus": bool(random.randint(0, 1)),
            "encryption": bool(random.randint(0, 1)),
        }
        device["security"] = deviceSecurity

    f.seek(0)
    json.dump(data, f, indent=4)
    f.truncate()
