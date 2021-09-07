from flask import Flask, render_template

app = Flask(__name__,static_folder='../frontend/build/static',
template_folder="../frontend/build")

@app.route('/')
def hello_world():
    return render_template("index.html")

app.run(host='0.0.0.0',port=5000)
