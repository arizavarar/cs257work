import psycopg2

def checkForNorthfield():
    conn = psycopg2.connect(
        host="localhost",
        port=5432,
        database="arizavarar",
        user="arizavarar",
        password="expo795beach")

    cur = conn.cursor()

    sql = "SELECT city, latitude, longitude FROM us_city_pop2 WHERE city = 'Northfield' "
    
    
    cur.execute(sql)

    row = cur.fetchone()
    if row ==  None:
        print("Northfield is not in the dataset")
    else:
        print(row[1], row[2])
    
    conn.commit()

    return None


def printLargestCityName():
    conn = psycopg2.connect(
        host="localhost",
        port=5432,
        database="arizavarar",
        user="arizavarar",
        password="expo795beach")

    cur = conn.cursor()

    sql = "SELECT city, city_population FROM us_city_pop2"
    
    
    cur.execute(sql)

    row2 = cur.fetchall()

    pop = 0

    for row in row2:
        if row[1] > pop:
            pop = row[1]
            maxPop = row[0]

    return maxPop

def checkSmallestCityMN():
    conn = psycopg2.connect(
        host="localhost",
        port=5432,
        database="arizavarar",
        user="arizavarar",
        password="expo795beach")

    cur = conn.cursor()

    sql = "SELECT * FROM us_city_pop2 WHERE city_state = 'Minnesota' "
    
    
    cur.execute(sql)

    rows = cur.fetchall()

    smallestCity = rows[0][0]
    smallestRow = rows[0][2]

    for row in rows:
        if smallestRow >= row[2]:
            smallestRow = row[2]
            smallestCity = row[0]
    
    return print("This is the smallest city in MN: " + smallestCity)