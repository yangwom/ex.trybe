SELECT * FROM sakila.staff;
SELECT * FROM sakila.address;

SELECT  
    s.first_name, 
    s.last_name, 
    s.address_id, 
    a.address_id
FROM sakila.staff AS s
INNER JOIN sakila.address AS a
ON  s.address_id = a.address_id;