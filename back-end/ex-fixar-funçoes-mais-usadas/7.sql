SELECT * FROM sakila.customer;
SELECT * FROM sakila.address;

SELECT 
    c.customer_id, 
    c.first_name, 
    c.email, 
    c.address_id,
    e.address_id, 
    e.address
FROM sakila.customer c
JOIN sakila.address e
ON c.address_id = e.address_id
ORDER BY c.first_name DESC LIMIT 100;