drop table if exists "user";
drop table if exists "gender";
drop table if exists "profile_field_visiblity";
drop table if exists "profile";

create table if not exists "api_permission" (
	"id" integer generated always as identity primary key,
	"pattern" text not null,
	"method" text not null,
	"description" text default null,
	"enabled" boolean not null default true
);

create table if not exists "position" (
	"id" uuid primary key,
	"name" text not null,
	"description" text default null,
	"created_at" timestampz not null,
	"updated_at" timestampz not null
);

create table if not exists "role" (
	"id" integer generated always as identity primary key,
	"name" text not null,
	"description" text not null,
	"status" text not null,
	"created_at" timestampz not null,
	"updated_at" timestampz not null
);

create table if not exists "role_position" (
	"role_id" uuid not null,
	"position_id" uuid not null
);

create table if not exists "role_permission" (
	"role_id" uuid not null,
	"permission_id" uuid not null
);

create table if not exists "user" (
	"id" uuid primary key,
	"code" text default null,
	"work_email" text default null,
	"personal_email" text not null,
	"password" varchar(100) not null,
	"active" boolean default true
);

create table if not exists "gender" (
	"id" integer generated always as identity primary key,
	"name" text not null,
	"description" text not null
);

create table if not exists "profile_field_visiblity" (
	"user_id" uuid primary key,
	"field" text not null,
	"is_visible" boolean
);

create table if not exists "employee_type" (
    "id" uuid primary key,
	"code" varchar(50) unique not null,
    "name" varchar(100) not null,
    "is_full_time" boolean default false,
    "is_part_time" boolean default false,
    "is_contract" boolean default false,
    "is_intern" boolean default false,
    "is_freelancer" boolean default false,
    "is_hourly_paid" boolean default false,
    "is_benefit_eligible" boolean default false,
    "is_overtime_eligible" boolean default false,
    "is_probation_required" boolean default false,
    "description" text default null,
    "status" boolean default true
);


create table if not exists "profile" (
	"id" uuid primary key,
	"full_name" text not null,
	"status" text not null,
	"profile_img" text not null,
	"date_of_birth" date default null,
	"gender_id" integer not null,
	"phone_number" text default null,
	"description" text default null,
	"employment_type_id",
	"hire_date" date default null,
	"employment_start_date" date default null,
	"contract_end_date" date default null,
	"probation_end_date" date default null,
	"created_at" timestampz not null,
	"updated_at" timestampz not null
);

create table if not exists "department" (
	"id" uuid primary key,
	"code" text default null,
	"name" text not null,
	"description" text default null,
	"parent_id" uuid default null,
	"created_at" timestampz not null,
	"updated_at" timestampz not null
);

create table if not exists "user_department" (
	"user_id" uuid not null,
	"department_id" uuid not null
);

create table if not exists "user_role" (
	"user_id" uuid not null,
	"role_id" uuid not null
);

create table if not exists "user_position" (
	"user_id" uuid not null,
	"position_id" uuid not null
);

create table if not exists "position_department" (
	"position_id" uuid not null,
	"department_id" uuid not null
);