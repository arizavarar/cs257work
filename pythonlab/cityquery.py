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

    return print("This is the city with the largest population: " + maxPop)

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

def citiesFurthestInEachdirection():
    conn = psycopg2.connect(
        host="localhost",
        port=5432,
        database="arizavarar",
        user="arizavarar",
        password="expo795beach")

    cur = conn.cursor()

    sql = "SELECT * FROM us_city_pop2"
    
    cur.execute(sql)

    rows = cur.fetchall()

    northSpot = rows[0][3]
    northSpotName = ""
    southSpot = rows[0][3]
    southSpotName = ""
    eastSpot = rows[0][4]
    eastSpotName = ""
    westSpot = rows[0][4]
    westSpotName = ""

    for row in rows:
        if row[3] > northSpot:
            northSpot = row[3]
            northSpotName = row[0]
    for row in rows:
        if southSpot >= row [3]:
            southSpot = row[3]
            southSpotName = row[0]
    for row in rows:
        if row[4] > eastSpot:
            eastSpot = row[4]
            eastSpotName = row[0]
    for row in rows:
        if westSpot >= row[4]:
            westSpot = row[4]
            westSpotName = row[0]
    
    stringCities = "These are the cities at the furthest spot in each direction "
    return print(stringCities + "\n" "North: " + northSpotName + " South: " + southSpotName + " East: " + eastSpotName + " West: " + westSpotName)

def printOutCityPopulationTotal():
    conn = psycopg2.connect(
        host="localhost",
        port=5432,
        database="arizavarar",
        user="arizavarar",
        password="expo795beach")

    cur = conn.cursor()

    sql = """SELECT city,city_state, city_population, code FROM us_city_pop2 JOIN us_state_pop2 
    on state = city_state WHERE code = %s OR city_state = %s"""
    
    userInput = input("Type a states name or abbreviation to obtain its cities population total: ")

    cur.execute(sql, (userInput,userInput))

    rows = cur.fetchall()

    combinedCityPop = 0
    nameOfState = ""

    for row in rows:
        combinedCityPop += row[2]
        nameOfState = row[1]

    return print("This is the combined population for all the cities in " + nameOfState + ": " + combinedCityPop)


checkForNorthfield()
printLargestCityName()
checkSmallestCityMN()
citiesFurthestInEachdirection()
printOutCityPopulationTotal()