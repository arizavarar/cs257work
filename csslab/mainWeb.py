from flask import Flask
from flask import render_template
import psycopg2

app = Flask(__name__)

@app.route('/')
def welcome():
    return render_template("mainWebsite.html")

@app.route('/<brand>')
def laptopBrandChosen(brand):
    
    # Establishing Environment
    conn = psycopg2.connect(
        host="localhost",
        port=5432,
        database="mosesm2",
        user="mosesm2",
        password="field599farm")
    
    cur = conn.cursor()

    query = "SELECT laptop_name, price FROM laptops WHERE brand = %s;"
    cur.execute(query, (brand,))

    rows = cur.fetchall()
    

    cur.close()
    conn.close()

    return f"Laptops found for brand {brand}: " + str(rows)


if __name__ == '__main__':
    my_port = 5111
    app.run(host='0.0.0.0', port = my_port) 
