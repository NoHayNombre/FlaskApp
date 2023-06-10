from flask import Flask, render_template, request, redirect, url_for, session, flash
import time

app = Flask(__name__)

def get_data():
    list = ['Daniel', 'Jorge', 'Luis', 'Carlos']
    time.sleep(2)
    return list

@app.route('/', methods=['GET', 'POST'])
def index():
    return render_template('testing.html')

@app.route('/data', methods=['GET', 'POST'])
def data():
    data = get_data()
    if data:
        if data:
            return render_template('testing.html', names=data)
        else:
            return "No se pudo obtener la lista de datos"
