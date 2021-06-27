![NPM](https://img.shields.io/badge/NPM-6.14.11-green)
![Javascript](https://img.shields.io/badge/JQuery-2.2.4-yellow)
![Back End language](https://img.shields.io/badge/Python-3.9.5-blue)
![Back End language](https://img.shields.io/badge/Flask-1.1.2-blue)
![Styling Language](https://img.shields.io/badge/Bootstrap-4.4.1-blueviolet)

# Welcome to my Reading List Project!

A little project whose objective was to help me learn how different languages connect together.

# Technologies used

The simple API uses Python, and the client side JQuery. With HTML and Bootstrap CSS.

# Getting started

First do

`$ npm install`

This app requires Flask to work. Use

`$ pip install -r requirements.txt `

To run and test the app

`export FLASK_APP=index.py`

`export FLASK_ENV=develompent`

`flask run`

# How it works

The table is dinamically filled after the JS file sends a get request. After that, it will start to listen if the user wants to change some element.

The editor will check if the user wanted to edit add a new book or edit an already existing one. Filling the inputs with the correct information if that's the case.
After clicking the submit button, and if every input is correct, the program will send the request and the python file will add the corresponding book to the "database" (Given that this is a small project. Created for the purpose of learning how to make multiple languages interact with each other. The program deals with little aumont of data. It uses a CSV file).
