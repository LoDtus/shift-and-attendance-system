drop table if exists "user";

create table if not exists "user" (
	id varchar(100) primary key,
	employee_code varchar(100) default null,
	work_email varchar(100) default null,
	personal_email varchar(100) default null,
	password varchar(100) default null,
	active boolean default true
);

create table if not exists "gender" (
	id varchar(100) primary key,
	name varchar(100),
	description varchar(100)
);
drop table if exists "user";

create table if not exists "user" (
	"id" varchar(100) primary key,
	"employee_code" varchar(100) default null,
	"work_email" varchar(100) default null,
	"personal_email" varchar(100) default null,
	"password" varchar(100) default null,
	"active" boolean default true
);

create table if not exists "gender" (
	"id" varchar(100) primary key,
	"name" varchar(100),
	"description" varchar(100)
);

create table if not exists "profile" (
	"id" varchar(100) primary key,
	"full_name" varchar(100),
	"status" varchar(100),
	"profile_img" varchar(100),
	"date_of_birth" varchar(100),
	"gender_id" varchar(100),
	"phone_number" varchar(100),
	"description" varchar(100),
	"created_at" varchar(100),
	"updated_at" varchar(100)
);

insert into "user" values
('u001', 'NV001', 'alice@company.com', 'alice@gmail.com', '123456', true),
('u002', 'NV002', 'bob@company.com', 'bob@gmail.com', '123456', true)
;

select * from "user";