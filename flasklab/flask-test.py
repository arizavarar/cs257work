import flask

app = flask.Flask(__name__)

#
@app.route('/hello')
def my_function():
    return "Hello World!"

@app.route('/display/<word1>/<word2>')
def my_display(word1, word2):
    the_string = "The words are: " + word1 + " and " + word2;
    return the_string

@app.route('/color/<word1>')
def my_color(word1):
    return '<h1 style="color:MediumSeaGreen">' + word1 + '</h1>'
    
@app.route('/add/<num1>/<num2>')
def add_nums(num1, num2):
    total = int(num1) + int(num2)
    return str(total)
    
@app.route('/pop/<abbrev>')
def printOutCityPopulationTotal(abbrev):
    conn = psycopg2.connect(
        host="localhost",
        port=5432,
        database="arizavarar",
        user="arizavarar",
        password="expo795beach")

    cur = conn.cursor()

    sql = """SELECT city,city_state, city_population, code FROM us_city_pop2 JOIN us_state_pop2 
    on state = city_state WHERE code = %s OR city_state = %s"""
    
    userInput = abbrev

    cur.execute(sql, (userInput,userInput))

    rows = cur.fetchall()

    combinedCityPop = 0
    nameOfState = ""

    for row in rows:
        combinedCityPop += row[2]
        nameOfState = row[1]

    return print("This is the combined population for all the cities in " + nameOfState + ": " + str(combinedCityPop))

if __name__ == '__main__':
    my_port = 5111
    app.run(host='0.0.0.0', port = my_port)
