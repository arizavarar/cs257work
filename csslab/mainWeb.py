from flask import Flask, render_template, jsonify
import psycopg2
import json

app = Flask(__name__)

#Welcome Page
@app.route('/')
def welcome():
    return render_template("mainWebsite.html")

#Displays the filtered options results
@app.route('/display/<brand>/<ram>/<storage>')
def displayLaptopChosen(brand,ram,storage):
    return render_template("filterOutput.html")

#Gathers the result for filtered options and return the JSON data
@app.route('/json/<brand>/<ram>/<storage>')
def laptopBrandChosen(brand, ram, storage):
    # Establishing Environment
    conn = psycopg2.connect(
        host="localhost",
        port=5432,
        database="arizavarar",
        user="arizavarar",
        password="expo795beach"
    )
    
    cur = conn.cursor()
    intRam = int(ram)
    intStor = int(storage)
    
    query = "SELECT Laptop_Name, Price, laptopindex FROM laptops WHERE Brand = %s AND RAM = %s AND Storage = %s;"
    cur.execute(query, (brand, intRam, intStor))

    rows = cur.fetchall()
    
    if not rows:
        cur.close()
        conn.close()
        return jsonify(message="No laptops Matched Your Specifications")
    
    laptopsName = [row[0] for row in rows]
    laptopsPrices = [row[1] for row in rows]
    laptopImages = [row[2] for row in rows]
    
    
    cur.close()
    conn.close()
    
    json_answer = {'nameForLaptop': laptopsName, 'priceForLaptop': laptopsPrices, 'imageIndex': laptopImages}
    return json.dumps(json_answer)


#Displays the search result peage
@app.route('/display/<wordSearched>')
def displaySearched(wordSearched):
    return render_template("searchOutput.html")

#Gather the searched word content and returns JSON data
@app.route('/search/<wordSearched>')
def searchFunction(wordSearched):
    conn = psycopg2.connect(
        host="localhost",
        port=5432,
        database="arizavarar",
        user="arizavarar",
        password="expo795beach"
    )
    
    cur = conn.cursor()

    query = """
    SELECT Laptop_Name, Price, laptopindex 
    FROM laptops 
    WHERE 
        Brand iLIKE %s OR 
        Laptop_Name iLIKE %s OR 
        CAST(Price AS TEXT) iLIKE %s OR 
        Processor_Brand iLIKE %s OR 
        GPU iLIKE %s OR 
        OS iLIKE %s;
    """
    search_pattern = '%' + wordSearched + '%'
    cur.execute(query, (search_pattern, search_pattern, search_pattern, search_pattern, search_pattern, search_pattern))

    rows = cur.fetchall()

    if not rows:
        cur.close()
        conn.close()
        return jsonify(message="No laptops Matched Your Specifications")

    laptopsName = [row[0] for row in rows]
    laptopsPrices = [row[1] for row in rows]
    laptopImages = [row[2] for row in rows]


    cur.close()
    conn.close()

    json_answer = {'nameForLaptop': laptopsName, 'priceForLaptop': laptopsPrices, 'imageIndex': laptopImages}
    return json.dumps(json_answer)

if __name__ == '__main__':
    my_port = 5112
    app.run(host='0.0.0.0', port=my_port)

