SELECT * FROM sakila.actor;
SELECT * FROM film_actor;

SELECT COUNT(*) FROM staff;

SELECT 
    a.actor_id, 
    a.first_name, 
    f.film_id
FROM sakila.actor AS a
INNER JOIN film_actor AS f
ON a.actor_id = f.film_id;