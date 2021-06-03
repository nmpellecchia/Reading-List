from flask import json


def get_all_books():
    book_list = {}
    books = []
    # append the array inside the dictionary. So it can be later converted to JSON
    book_list['response'] = books

    with open('book-list.csv', 'r') as reading_list:
        for book in reading_list:
            # Extract the values from the csv data
            title,author,status,rating = book.strip().split(',')
            # Create a dictionary and add it to the list
            books.append({
                'title': title,
                'author': author,
                'status': status,
                'rating': rating
            })

    return book_list

##################

def add_book(book):
    str_book = json.dumps(book)
    no_quote_book = str_book.strip('"')
    with open('book-list.csv', 'a') as reading_list:
        reading_list.write(f"{no_quote_book}\n")
    return 'OK'

##################

def delete_book(book):
    book_to_delete = (json.dumps(book)).strip('"')
    # copy ALL the lines (This is not efficient, that's why we don't store things like this)
    with open('book-list.csv', 'r') as complete_list:
        lines = complete_list.readlines()
    # now read every line and remove the one that matches
    with open('book-list.csv', 'w') as reading_list:
        for line in lines:
            if book_to_delete not in line.strip("\n"):
                reading_list.write(line)