from flask import Flask, render_template ,request,jsonify
from profile import create_profile, login_system
import json

app = Flask(__name__,static_folder="../frontend/build/static",template_folder="../frontend/build")

@app.route('/')
@app.route('/signin')
@app.route('/login')

def hello_world():
    return render_template("index.html")

@ app.route('/api/signup',methods=['POST'])
def signup():
    json_request = request.get_json()
    response=create_profile(json_request['profile'])
    return jsonify(response), 201

@ app.route('/api/login',methods=['POST'])
def login():
    json_request = request.get_json()
    response = login_system(json_request['login'])
    return jsonify(response),201

app.run(host="0.0.0.0",port=5000)
