insert into users (address, email, name, password, phone)
values ('Quan 1', 'dung@gmail.com', 'dung', '$2a$10$qOuSIHKUFEEr2shpeBU7P.Fk7MN/8I92WL1OTiEoQgz.ZCc1ByLj.', '0358143280');
insert into users (address, email, name, password, phone)
values ('Quận Thủ Đức', 'admin@gmail.com', 'admin', '$2a$10$.HjolvzOdkTnZGBTN5mc4e7ZUvt3L3IkQO71ZFX/sI9VmCI5oVznm', '0941672590');
-- pass: 123456

insert into roles (role_name) VALUES ('GIASU');
insert into roles (role_name) VALUES ('PHUHUYNH');
insert into roles (role_name) VALUES ('ADMIN');

insert into user_role (id_user, id_role) values (1,3);
insert into user_role (id_user, id_role) values (2,3);