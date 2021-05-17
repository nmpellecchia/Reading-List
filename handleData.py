
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
    print('get books fn')
    print(books)
    print(book_list)
    return book_list