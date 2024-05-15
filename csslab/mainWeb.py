from flask import Flask
from flask import render_template
import psycopg2

app = Flask(__name__)

@app.route('/')
def welcome():
    return render_template("mainWebsite.html")

@app.route('/<brand>/int<ram>/int<storage>')
def laptopBrandChosen(brand, ram, storage):
    
    # Establishing Environment
    conn = psycopg2.connect(
        host="localhost",
        port=5432,
        database="mosesm2",
        user="mosesm2",
        password="field599farm")
    
    cur = conn.cursor()

    # Construct the base SQL query
    query = "SELECT laptop_name, price FROM laptops WHERE true"
    # Add conditions for brand, ram, and storage if they are provided
    params = []
    if brand != "all":
        query += " AND brand = %s"
        params.append(brand)
    if ram != "all":
        query += " AND RAM = %s"
        params.append(int(ram))
    if storage != "all":
        query += " AND Storage = %s"
        params.append(int(storage))
    # Execute the query with appropriate parameters
    cur.execute(query, tuple(params))
    rows = cur.fetchall()
    
    cur.close()
    conn.close()

    return f"Laptops found: {rows}"



if __name__ == '__main__':
    my_port = 5111
    app.run(host='0.0.0.0', port=my_port)

