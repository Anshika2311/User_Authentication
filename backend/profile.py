import json

class Profile:
    def __init__(self,firstname,lastname,email,password):
        self.firstname = firstname
        self.lastname = lastname
        self.email = email
        self.password = password


def create_profile(profile):
    new_profile = Profile(profile)
    
