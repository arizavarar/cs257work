DROP TABLE IF EXISTS us_state_pop;
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
);
