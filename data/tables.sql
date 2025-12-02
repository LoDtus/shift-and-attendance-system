drop schema public cascade;
create schema public;

create extension if not exists pgcrypto;

create type gender_type as enum ('MALE', 'FEMALE', 'OTHER', 'UNKNOWN');

create table if not exists "users" (
	"id" uuid primary key default gen_random_uuid(),
	"code" text default null,
	"work_email" text default null,
	"personal_email" text not null,
	"password" varchar(100) not null,
	"active" boolean default true
);

create table if not exists "profiles" (
	"id" uuid primary key,
	"full_name" text not null,
	"status" text not null,
	"profile_img" text default null,
	"date_of_birth" date default null,
	"gender" gender_type not null default 'UNKNOWN',
	"phone_number" text default null,
	"description" text default null,
	-- "employment_type_id" text default null,
	-- "hire_date" date default null,
	-- "employment_start_date" date default null,
	-- "contract_end_date" date default null,
	-- "probation_end_date" date default null,

	"created_at" timestamptz not null default now(),
	"updated_at" timestamptz not null default now(),
	"deleted_at" timestamptz default null,
	foreign key ("id") references "users"("id")
);

create table if not exists "roles" (
	"id" uuid primary key default gen_random_uuid(),
	"name" text not null,
	"description" text not null,
	"status" text not null,
	"created_at" timestamptz not null default now(),
	"updated_at" timestamptz not null default now(),
	"deleted_at" timestamptz default null
);

-- create table if not exists "employee_type" (
--     "id" uuid primary key,
-- 	"code" varchar(50) unique not null,
--     "name" varchar(100) not null,

--     "is_full_time" boolean default false,
--     "is_part_time" boolean default false,
--     "is_contract" boolean default false,
--     "is_intern" boolean default false,
--     "is_freelancer" boolean default false,

--     "is_hourly_paid" boolean default false,
--     "is_benefit_eligible" boolean default false,
--     "is_overtime_eligible" boolean default false,
--     "is_probation_required" boolean default false,
--     "description" text default null,
--     "status" boolean default true
-- );

create table if not exists "positions" (
	"id" uuid primary key default gen_random_uuid(),
	"code" text default null,
	"name" text not null,
	"description" text default null,
	"created_at" timestamptz not null default now(),
	"updated_at" timestamptz not null default now()
);

create table if not exists "departments" (
	"id" uuid primary key default gen_random_uuid(),
	"code" text default null,
	"name" text not null,
	"description" text default null,
	"parent_id" uuid default null,
	"created_at" timestamptz not null default now(),
	"updated_at" timestamptz not null default now()
);

create table if not exists "users_roles" (
	"user_id" uuid not null,
	"role_id" uuid not null,
	primary key ("user_id", "role_id"),
	foreign key ("user_id") references "profiles"("id"),
	foreign key ("role_id") references "roles"("id")
);

create table if not exists "users_positions" (
	"user_id" uuid not null,
	"position_id" uuid not null,
	primary key ("user_id", "position_id"),
	foreign key ("user_id") references "profiles"("id"),
	foreign key ("position_id") references "positions"("id")
);

create table if not exists "users_departments" (
	"user_id" uuid not null,
	"department_id" uuid not null,
	primary key ("user_id", "department_id"),
	foreign key ("user_id") references "profiles"("id"),
	foreign key ("department_id") references "departments"("id")
);

create table if not exists "positions_departments" (
	"position_id" uuid not null,
	"department_id" uuid not null,
	primary key ("position_id", "department_id"),
	foreign key ("position_id") references "positions"("id"),
	foreign key ("department_id") references "departments"("id")
);

-- Hàm cập nhật updated_at
create or replace function set_updated_at()
returns trigger as $$
begin
    new.updated_at = now();
    return new;
end;
$$ language plpgsql;

-- Tự động tạo Trigger cho tất cả các bảng có updated_at
do $$
declare
    tbl record;
begin
    for tbl in
        select table_name
        from information_schema.columns
        where column_name = 'updated_at'
        and table_schema = 'public'
    loop
        execute format('drop trigger if exists trg_update_%s on %I;', 
            tbl.table_name, 
            tbl.table_name
        );
        execute format(
            'create trigger trg_update_%s
            before update on %I
            for each row
            execute function set_updated_at();',
            tbl.table_name,
            tbl.table_name
        );
    end loop;
end
$$;