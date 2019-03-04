
CREATE DATABASE dream_db;
use dream_db;

create table dreams (
    id int(10) NOT NULL AUTO_INCREMENT,
    dream_description varchar(255) NOT NULL,
    mood varchar(30) NOT NULL,
    food varchar(30) NOT NULL,
    hours_of_sleep int(2) NOT NULL,
    category varchar(30) NOT NULL,
    tv_on boolean DEFAULT false,
    PRIMARY KEY (id)
);

create table dreamer (
    id int(10) NOT NULL AUTO_INCREMENT,
    dreamer_name varchar(40) NOT NULL,
    age varchar(30) NOT NULL,
    gender varchar(30) NOT NULL,
    email varchar(30) NOT NULL,
    tv_on boolean DEFAULT false,
    PRIMARY KEY (id)
);

