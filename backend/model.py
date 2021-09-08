import json
import pymongo
from db import mydatabase
from collections import OrderedDict

mydatabase.create_collection("profiles")

f1 = open('./backend/profile.json','r')
with f1 as j:
    d=json.loads(j.read())
d = OrderedDict(d)
mydatabase.command(d)

mydatbase.profiles.create_index("username",unique=True)
mydatabase.profiles.create_index("email",unique=True)

