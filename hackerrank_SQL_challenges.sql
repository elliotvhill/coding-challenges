------- HackerRank's SQL 'Basic Select' -------

----------

-- Revising the Select Query I
-- Query all columns for all American cities in the CITY table with populations larger than 100000. The CountryCode for America is USA.

-- Solution:
SELECT * FROM city WHERE COUNTRYCODE = 'USA' AND population > 100000;

----------

-- Revising the Select Query II
-- Query the NAME field for all American cities in the CITY table with populations larger than 120000. The CountryCode for America is USA.

-- Solution:
SELECT name FROM city WHERE countrycode = 'USA' AND population > 120000;

----------

-- Select All
-- Query all columns (attributes) for every row in the CITY table.

-- Solution: 
SELECT * FROM city;

----------

-- Select By ID
-- Query all columns for a city in CITY with the ID 1661.

-- Solution: 
SELECT * FROM city WHERE id = 1661;

----------

-- Japanese Cities' Attributes
-- Query all attributes of every Japanese city in the CITY table. The COUNTRYCODE for Japan is JPN.

-- Solution: 
SELECT * FROM city WHERE countrycode = 'JPN';

----------

-- Japanese Cities' Names
-- Query the names of all the Japanese cities in the CITY table. The COUNTRYCODE for Japan is JPN.

-- Solution: 
SELECT name FROM city WHERE countrycode = 'JPN';

----------

-- Weather Observation Station 1
-- Query a list of CITY and STATE from the STATION table.

-- Solution: 
SELECT city, state FROM station;

----------

-- Weather Observation Station 3
-- Query a list of CITY names from STATION for cities that have an even ID number. Print the results in any order, but exclude duplicates from the answer.

-- Solution: 
SELECT DISTINCT city FROM station WHERE id % 2 = 0;

----------

-- Weather Observation Station 4
-- Find the difference between the total number of CITY entries in the table and the number of distinct CITY entries in the table.

-- Solution: 
SELECT (COUNT(city) - COUNT(DISTINCT city)) FROM station;

----------

-- African Cities
-- Given the CITY and COUNTRY tables, query the names of all cities where the CONTINENT is 'Africa'.
-- Note: CITY.CountryCode and COUNTRY.Code are matching key columns.

-- Solution: 
SELECT city.name FROM city JOIN country ON city.countrycode = country.code WHERE continent = 'Africa';

----------

-- Average Population of Each Continent
-- Given the CITY and COUNTRY tables, query the names of all the continents (COUNTRY.Continent) and their respective average city populations (CITY.Population) rounded down to the nearest integer.
-- Note: CITY.CountryCode and COUNTRY.Code are matching key columns.

-- Solution: 
SELECT country.continent, FLOOR(AVG(city.population)) FROM city JOIN country ON city.countrycode = country.code GROUP BY country.continent;

----------

-- 
-- 

-- Solution: 

----------

-- 
-- 

-- Solution: 

----------

-- 
-- 

-- Solution: 

----------

-- 
-- 

-- Solution: 

