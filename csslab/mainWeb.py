from flask import Flask
from flask import render_template
import psycopg2
import json


app = Flask(__name__)

@app.route('/')
def welcome():
    return render_template("mainWebsite.html")

@app.route('/display/<brand>/<ram>/<storage>')
def displayLaptopChosen(brand,ram,storage):
    return render_template("filterOutput.html")

@app.route('/json/<brand>/<ram>/<storage>')
def laptopBrandChosen(brand, ram, storage):
    # Establishing Environment
    conn = psycopg2.connect(
        host="localhost",
        port=5432,
        database="mosesm2",
        user="mosesm2",
        password="field599farm"
    )
    
    cur = conn.cursor()
    intRam = int(ram)
    intStor = int(storage)
    
    query = "SELECT Laptop_Name, Price FROM laptops WHERE Brand = %s AND RAM = %s AND Storage = %s;"
    cur.execute(query, (brand, intRam, intStor))

    rows = cur.fetchall()
    
    laptopsName = []
    laptopsPrices = []
    if len(rows) != 0 :
        for row in rows:
            laptopsName.append(row[0])
            laptopsPrices.append(row[1])
        
    cur.close()
    conn.close()
    
    json_answer = {'brandName': laptopsName, 'ramSize': laptopsPrices}
    return json.dumps(json_answer)
    ##return f"Laptops found for brand {brand}: " + str(rows)

if __name__ == '__main__':
    my_port = 5111
    app.run(host='0.0.0.0', port=my_port)

