CREATE TABLE user(
    id varchar(40) primary key,
    username varchar(40) unique,
    email varchar(40) unique not null,
    password varchar(40) not null
);
