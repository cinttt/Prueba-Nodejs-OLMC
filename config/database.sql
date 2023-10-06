create database sensive;
use sensive;

create table contact (
name VARCHAR(50) NOT NULL,
email_address VARCHAR(100) NOT NULL, 
subject VARCHAR(50) NOT NULL,
message VARCHAR(400) NOT NULL
);

select * from contact;