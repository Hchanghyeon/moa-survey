use moasurvey;
drop table if exists answer;
drop table if exists item;
drop table if exists question;
drop table if exists member;
create table member
(
    member_id  bigint auto_increment primary key,
    email      varchar(50) not null,
    password   varchar(50) not null,
    nickname   varchar(30) not null,
    gender     varchar(10) not null,
    age_group  int         not null,
    blood_type varchar(5)  not null,
    mbti       varchar(10) not null,
    department varchar(5)  not null,
    job        varchar(10) not null,
    constraint UK_mbmcqelty0fbrvxp1q58dn57t unique (email)
);

create table question
(
    question_id bigint auto_increment primary key,
    title       varchar(100) not null,
    member_id bigint null,
    constraint FK1nuuke7olg7b9fkyp2ba9d5bx foreign key (member_id) references moasurvey.member (member_id)
);

create table item
(
    item_id     bigint auto_increment primary key,
    text        varchar(100) not null,
    question_id bigint null,
    constraint FKthpx9igo9itj557224y4g7glw foreign key (question_id) references moasurvey.question (question_id)
);

create table answer
(
    answer_id bigint auto_increment primary key,
    member_id bigint not null unique,
    item_id   bigint not null,
    constraint FKmd5my8n6cqajta2wolky3v1x0 foreign key (item_id) references moasurvey.item (item_id),
    constraint FKn2sp5pa6h0u2kixjl2r4vfluf foreign key (member_id) references moasurvey.member (member_id)
);



