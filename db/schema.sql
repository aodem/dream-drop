-- Drops the blogger if it exists currently --
DROP DATABASE IF EXISTS dream_db;
-- Creates the "blogger" database --
CREATE DATABASE dream_db;
use dream_db;

create table users (
    id int(10) NOT NULL AUTO_INCREMENT,
    dreamer_name varchar(50) NOT NULL,
     age int(3) NOT NULL,
     sex varchar(10) NOT NULL,
     email varchar(60) NOT NULL,
    PRIMARY KEY (id)
);

create table dreams (
    id int(10) NOT NULL AUTO_INCREMENT,
    dream_description varchar NOT NULL,
    mood varchar(30) NOT NULL,
    food_before_sleep varchar(30) NOT NULL,
    hours_of_sleep int(2) NOT NULL,
    tv_on boolean DEFAULT false,
    PRIMARY KEY (id)
);