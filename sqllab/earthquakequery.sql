-- Find all of the earthquakes of magnitudes from 2-5 (ordered by magnitude)that occured in California and near its borders
SELECT * FROM earthquakes WHERE mag BETWEEN 2 AND 5
INTERSECT
SELECT * FROM earthquakes WHERE longitude BETWEEN -124.25 AND -114.07 AND latitude BETWEEN 32.32 AND 42
ORDER BY mag DESC;
-- Find all the countries that had an earthquake of magnitude 7 or greater
SELECT * FROM earthquakes WHERE mag > 7;
-- Find all of the earthquakes of a magnitude greater than 5, that had a quakedepth between 20 and 80
SELECT * FROM earthquakes WHERE quakedepth BETWEEN 20 AND 80
INTERSECT
SELECT * FROM earthquakes WHERE mag >5;
--Find all of  the earthquakes of a magnitude between 2 and 6 that occured in Alaska (Substitute the example given since I don't quaketime in my data set)
SELECT * FROM earthquakes WHERE mag BETWEEN 2 AND 6
INTERSECT
SELECT * FROM earthquakes WHERE longitude BETWEEN -180 AND -130 AND latitude BETWEEN 52 AND 71
ORDER BY mag DESC;
