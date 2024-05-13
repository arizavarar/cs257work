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

    # Check if any laptops were found
    if rows:
        print(f"Laptops found for brand {brand}:")
        for row in rows:
            print(f"{row[0]} - ${row[1]}")
    else:
        print(f"No laptops found for brand {brand}.")

    cur.close()
    conn.close()


if __name__ == '__main__':
    my_port = 5111
    app.run(host='0.0.0.0', port = my_port) 
