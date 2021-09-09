from flask import Flask, render_template, request, jsonify
import json
from db import mydatabase
from collections import  OrderedDict

mydatabase.profiles.drop()

mydatabase.create_collection("profiles")

f1 = open("./profile.json",'r')
with f1 as j:
    d = json.loads(j.read())
d = OrderedDict(d)
mydatabase.command(d)

mydatabase.profiles.create_index("email",unique =True)
mydatabase.profiles.create_index("username",unique =True)
