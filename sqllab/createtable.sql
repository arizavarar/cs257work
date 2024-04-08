DROP TABLE IF EXISTS earthquakes;
CREATE TABLE earthquakes (
  quaketime time with time zone,
  latitude real,
  longitude real,
  quakedepth real,
  mag real,
  magType text,
  rms real,
  net text,
  id text,
  updated time with time zone,
  place text,
  quaketype text,
  status text,
  location text,
  magSource text,
);
