import psycopg2
def createTables():
    conn = psycopg2.connect(
        host="localhost",
        port=5432,
        database="arizavarar",
        user="arizavarar",
        password="expo795beach")

    cur = conn.cursor()

    sql = """DROP TABLE IF EXISTS us_state_pop;
    CREATE TABLE us_state_pop (
    code text,
    state text,
    population real
    );

    DROP TABLE IF EXISTS us_city_pop;
    CREATE TABLE us_city_pop (
    city text,
    city_state text,
    city_population  real,
    latitude real,
    longitude real
    );"""
    
    cur.execute(sql)

    conn.commit()

createTables()

