import json

class Profile:
    def __init__(self,firstname,lastname,email,password):
        self.firstname = firstname
        self.lastname = lastname
        self.email = email
        self.password = password


def create_profile(profile):
    try:
        new_profile = Profile(profile)
        db.profile.insert_one(new_profile.__dict__)
        return{
            "message":"Profile created",
            "result": True
        }
    except:
        return{
            "message":"Username already exist",
            "result":False
        }



