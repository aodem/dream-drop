
CREATE DATABASE dream_db;
use dream_db;

create table dreams (
    id int(10) NOT NULL AUTO_INCREMENT,
    dream_description varchar NOT NULL,
    mood varchar(30) NOT NULL,
    food_before_sleep varchar(30) NOT NULL,
    hours_of_sleep int(2) NOT NULL,
    tv_on boolean DEFAULT false,
    PRIMARY KEY (id)
);