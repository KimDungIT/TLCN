create table roles
(
    id_role   int auto_increment
        primary key,
    role_name varchar(255) not null
);

create table users
(
    id_user      int auto_increment
        primary key,
    address      varchar(255) not null,
    date_created datetime     null,
    email        varchar(255) null,
    last_update  datetime     null,
    name         varchar(255) not null,
    password     varchar(100) not null,
    phone        varchar(11)  not null,
    constraint UK_du5v5sr43g5bfnji4vb8hg5s3
        unique (phone)
);

create table classes
(
    id_class           int auto_increment
        primary key,
    address            varchar(255) not null,
    created_by         varchar(255) null,
    date_created       datetime     null,
    gender_requirement varchar(255) null,
    grade              varchar(255) not null,
    last_update        datetime     null,
    level_requirement  varchar(255) null,
    salary             double       not null,
    service_fee        double       not null,
    status             varchar(255) not null,
    subject            varchar(255) not null,
    time_teach         varchar(255) not null,
    updated_by         varchar(255) null,
    id_parent          int          not null,
    constraint FK4yjsocmaeowccpdawmsfa00xc
        foreign key (id_parent) references users (id_user)
);

create table tutors
(
    id_tutor           int auto_increment
        primary key,
    classes            text         not null,
    college            varchar(255) not null,
    created_by         varchar(255) null,
    date_created       datetime     null,
    district_can_teach varchar(255) not null,
    gender             varchar(11)  not null,
    graduation_year    varchar(11)  not null,
    image              varchar(255) null,
    last_update        datetime     null,
    major              varchar(255) not null,
    more_info          longtext     null,
    status             varchar(255) not null,
    subjects           text         not null,
    updated_by         varchar(255) null,
    year_of_birth      varchar(11)  not null,
    id_user            int          null,
    constraint FK9b22mv62w83nmvc2g3toetsg
        foreign key (id_user) references users (id_user)
);

create table class_tutor
(
    id_class int not null,
    id_tutor int not null,
    primary key (id_class, id_tutor),
    constraint FKbv62sr46cx2urv7ke76cjnqug
        foreign key (id_class) references classes (id_class),
    constraint FKi9xf69k8mony38sj6nxvb0adr
        foreign key (id_tutor) references tutors (id_tutor)
);

create table invoice
(
    id_invoice  int auto_increment
        primary key,
    service_fee double   not null,
    time        datetime null,
    id_class    int      not null,
    id_tutor    int      not null,
    constraint FK50jvq2a29cqgmar2n68806jm
        foreign key (id_tutor) references tutors (id_tutor),
    constraint FK6b18n5dwe2psjol4ant2uf84v
        foreign key (id_class) references classes (id_class)
);

create table user_role
(
    id_user int not null,
    id_role int not null,
    primary key (id_user, id_role),
    constraint FK2yqlxhjhgilevh7qvt2ve6udh
        foreign key (id_role) references roles (id_role),
    constraint FKr53t650tbjk5yipcm228wf1nc
        foreign key (id_user) references users (id_user)
);
