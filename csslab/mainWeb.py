from flask import Flask
from flask import render_template
import psycopg2

app = Flask(__name__)

@app.route('/')
def welcome():
    return render_template("mainWebsite.html")

@app.route('/<brand>/<ram>/<storage>')
def laptopBrandChosen(brand, ram, storage):
    try:
        # Establish database connection
        conn = psycopg2.connect(
            host="localhost",
            port=5432,
            database="mosesm2",
            user="mosesm2",
            password="field599farm"
        )
        cur = conn.cursor()

        # Convert ram and storage to integers
        intRam = int(ram)
        intStorage = int(storage)

        # Construct the SQL query
        query = "SELECT Laptop_Name, lID, Price FROM laptops WHERE Brand = %s AND RAM = %s AND Storage = %s;"
        cur.execute(query, (brand, intRam, intStorage))

        rows = cur.fetchall()

        cur.close()
        conn.close()

        return render_template("filterOutput.html", laptops=rows)
    
    except Exception as e:
        return f"An error occurred: {e}"

if __name__ == '__main__':
    my_port = 5111
    app.run(host='0.0.0.0', port=my_port)

