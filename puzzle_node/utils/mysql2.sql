create database puzzle;
use puzzle;
create USER 'puzzle'@'localhost'
 IDENTIFIED WITH mysql_native_password
 BY 'Yalla123!';
 
grant all privileges on puzzle.* to
'puzzle'@'localhost';

create table users (id integer not null auto_increment primary key,
usern varchar(15) not null,
passw varchar(15) not null);
insert into users values(null, 'indianaJ', 'Hat');
insert into users values(null, 'PrincessL', 'LightSiber');
select * from users;

--  alter USER 'puzzle'@'localhost'
--  IDENTIFIED WITH mysql_native_password
--  BY 'Yalla123!';