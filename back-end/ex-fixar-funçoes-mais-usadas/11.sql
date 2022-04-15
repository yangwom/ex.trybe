CREATE DATABASE IF NOT EXISTS yang;

USE yang;

CREATE TABLE dados(
    id INT PRIMARY KEY AUTO_INCREMENT ,
    cor VARCHAR(10),
    historico DECIMAL(5,2),
    idade INT,
);