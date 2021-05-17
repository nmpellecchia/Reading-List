from flask import Flask, render_template, request, json, jsonify

app = Flask(__name__)

@app.route("/")
def hello():
    return render_template("index.html")

@app.route("/edit")
def hello():
    return render_template("bookEditor.html")

if __name__ == "__main__":
    app.run()
