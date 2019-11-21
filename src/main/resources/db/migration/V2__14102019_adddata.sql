insert into users (address, email, name, password, phone)
values ('Quan 1', 'dung@gmail.com', 'dung', '$2a$10$qOuSIHKUFEEr2shpeBU7P.Fk7MN/8I92WL1OTiEoQgz.ZCc1ByLj.', '0358143280');


insert into roles (role_name) VALUES ('GIASU');
insert into roles (role_name) VALUES ('PHUHUYNH');
insert into roles (role_name) VALUES ('ADMIN');

insert into user_role (id_user, id_role) values (1,3);
