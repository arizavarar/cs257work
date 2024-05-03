from flask import Flask
from flask import render_template
from flask import request
import psycopg2

app = Flask(__name__)

@app.route('/')
def welcome():
    return render_template("webApp.html")

@app.route('/', methods=['POST'])
def getValue():
    name = request.form['fname']
    state = request.form['state']
    conn = psycopg2.connect(
        host="localhost",
        port=5432,
        database="arizavarar",
        user="arizavarar",
        password="expo795beach")

    cur = conn.cursor()

    sql = """SELECT city,city_state, city_population, code FROM us_city_pop2 JOIN us_state_pop2 
    on state = city_state WHERE code = %s OR city_state = %s"""
    
    userInput = input(state)

    cur.execute(sql, (userInput,userInput))

    rows = cur.fetchall()

    combinedCityPop = 0

    for row in rows:
        combinedCityPop += row[2]
   
    return render_template("stateChosen.html", n=name, st=state, cityPop=str(combinedCityPop))

if __name__ == '__main__':
    my_port = 5111
    app.run(host='0.0.0.0', port = my_port) 
