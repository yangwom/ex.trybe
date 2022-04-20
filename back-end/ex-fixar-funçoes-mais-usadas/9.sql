SELECT
    c.first_name, 
    COUNT(a.address) AS `quantidade de endereço`
FROM
    sakila.customer c
INNER JOIN 
    sakila.address AS a ON a.address_id = c.address_id
WHERE
    c.active = 1
GROUP BY 
    c.customer_id
ORDER BY 
    first_name DESC, 
    last_name DESC;