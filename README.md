![NPM](https://img.shields.io/badge/NPM-6.14.11-green)
![Javascript](https://img.shields.io/badge/JQuery-2.2.4-yellow)
![Back End language](https://img.shields.io/badge/Python-3.9.5-blue)
![Back End language](https://img.shields.io/badge/Flask-1.1.2-blue)
![Styling Language](https://img.shields.io/badge/Bootstrap-4.4.1-blueviolet)

# [ENG]

# Welcome to my Reading List Project!

A little project whose objective was to help me learn how different languages connect together.

# Technologies used

- API made using Flask, A Python library
- Jquery, Javascript library
- For the interface: HTML y Bootstrap

# Getting started

First do

`$ npm install`

This app requires Flask to work. Use

`$ pip install -r requirements.txt `

To run and test the app

`export FLASK_APP=index.py`

`export FLASK_ENV=develompent`

`flask run`

# How to use

- To add a book:
  - Click the button "Add book"
  - Fill all the camps with the correct information
  - Click submit
  - You'll be redirected to the landing page. The book will be displayed inside the list.
- To delete / edit a book
  - Find the book you want to edit / delete - Click "Edit"
  - To delete: Click the delete button. You'll be redirected to the landing page and the book removed from the list
  - To edit: Change the camp you desire to update - Click Submit

# Problems I faced

- As this was my first time using Flask, I had to learn the basics and how to render the html templates correctly.
- This was also my first formal attempt (After some individual tests) posting requests. Before I only did get request.
- I redirected the user too fast and the program wasn't able to finish updating the database. A simple timeOut solved the problem.

# Future Features

- Allow users to order the list with status or ranking (Now is only alphabetically)
- Alert user if the book they want to add is already saved
- Add more information about the book (e.g. starting and finish date)

# [ESP]

# Bienvenido a mi proyecto de lista de lectura!

Es un pequeño proyecto con el objetivo de ayudarme a comprender como distintos lenguajes se conectan entre sí.

# Tecnologías usadas

    - API hecha con Flask, librería de Python
    - Jquery, libería de Javascript
    - HTML y Bootstrap para la interfaz

# Cómo comenzaar

Primeramente escribe en la consola:

`$ npm install`

Esta app requiere Flask, así que también hará falta esto:

`$ pip install -r requirements.txt `

Para correr y testear la app:

`export FLASK_APP=index.py`

`export FLASK_ENV=develompent`

`flask run`

# Cómo se usa

- Para añadir un libro:

  - Click en el botón "Add book"
  - Rellena todos los campos con la información pertinente
  - Click en "Submit"
  - Serás redirigido a la página inicial y el libro ya aparecerá dentro de la lista en pantalla

- Para eliminar / editar un libro:
  - Encuentra el libro que quieras editar / eliminar
  - Click en el botón "Edit" a la que hay a la derecha
  - Para eliminar: Click en el botón "Delete". Serás redireccionado a la página inicial y el libro removido de la lista
  - Para editar: Cambia el / los campos que quieras actualizar y Clickea "Submit"

# Problemas que hubo

- Dado que este era mi primer intento usando Flask, tuve que aprender las bases para cargar las plantillas de HTML.
- Este también fue mi primer intento formal (Luego de pruebas individuales) usando POST request. Anteriormente solo había utilizado GET request.
- Redirigía a los usuarios demasiado rápido y el programa no lograba finalizar de actualizar la base de datos. Unos time Outs fueron necesarios para solucionar este problema.

# Adiciones futuras

- Permitir al usuario ordenar la lista por estado o ranking (Actualmente es solo por orden alfabético)
- Alertar al usuario si el libro que desea añadir ya se encuentra guardado
- Añadir más información sobre el libro (ej.: Fecha de inicio y finalización)
