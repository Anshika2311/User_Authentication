from flask import Flask, render_template
from profile import create_profile
import json
app = Flask(__name__,static_folder='../frontend/build/static',
template_folder="../frontend/build")

@app.route('/')
def hello_world():
    return render_template("index.html")

@ app.route('/api/signup',methods=['POST'])
def signup():
    json_request = request.get_json()
    response=create_profile(json_request['profile'])
    return jsonify(response), 201

app.run(host='0.0.0.0',port=5000)
