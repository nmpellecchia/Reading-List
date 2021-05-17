from flask import Flask, render_template, request, json, jsonify
from handleData import get_all_books

app = Flask(__name__)

@app.route("/")
def gen_index():
    return render_template("index.html")

@app.route("/edit")
def gen_editor():
    return render_template("bookEditor.html")

####### Manipulate data #####

@app.route("/book-data")
def get_data():
    all_books = get_all_books()
    return jsonify(all_books), 201

if __name__ == "__main__":
    app.run()
