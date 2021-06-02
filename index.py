from flask import Flask, render_template, request, json, jsonify
from handleData import get_all_books, add_book, delete_book

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

@app.route('/change-data', methods=['POST', 'DELETE'])
def modifying_values():
    book = request.get_json()
    print(book)
    if request.method == 'POST':
        print('adding a book!')
        print(book)
        add_book(book)
        return 'OK',200
    # DELETE
    else:
        print('deleting book: ')
        print(book)
        delete_book(book)
        return 'OK', 200
