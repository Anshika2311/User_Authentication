import json
from models import mydatabase
import bcrypt

class Profile:
    def __init__(self,profile):
        self.username = profile["username"]
        self.firstname = profile["firstname"]
        self.lastname = profile["lastname"]
        self.email = profile["email"]
        self.password = profile["password"]

def create_profile(profile):
    try:
        new_profile = Profile(profile)
        mydatabase.profiles.insert_one(new_profile.__dict__)
        return{
            "message":"Profile Created",
            "result":True
        }
    except:
        return{
            "message":"Profile already exist",
            "result":False
        }

def login_system(profile):
    try:
        login_details = mydatabase.profiles.find_one({"username":profile["username"]})
        if login_details["password"] == profile["password"]:
            return{
                "message":"login successfull",
                "result":True
            } 
        else:
            return{
                "result":False
            } 
    except:
        return{
            "message":"user doesn't exist",
            "result":False
        } 

