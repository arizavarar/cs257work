DROP TABLE IF EXISTS earthquakes;
CREATE TABLE earthquakes (
  latitude NUMERIC(5, 2),
  longitude NUMERIC(5, 2),
  quakedepth NUMERIC(5, 2),
  mag NUMERIC(5, 2),
  magType text,
  rms NUMERIC(5, 2),
  net text,
  id text,
  place text,
  quaketype text,
  statusCheck text,
  locationPlace text,
  magSource text
);
