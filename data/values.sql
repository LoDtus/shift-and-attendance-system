insert into "roles" ("id", "name", "description", "status", "created_at", "updated_at") values
('11111111-1111-1111-1111-111111111111', 'Admin', 'Toàn quyền hệ thống', 'active', now(), now()),
('11111111-1111-1111-1111-111111111112', 'HR', 'Quản lý nhân sự', 'active', now(), now()),
('11111111-1111-1111-1111-111111111113', 'Employee', 'Nhân viên thông thường', 'active', now(), now());

insert into "positions" ("id", "code", "name", "description", "created_at", "updated_at") values
('22222222-2222-2222-2222-222222222221', 'CEO', 'Chief Executive Officer', 'Giám đốc điều hành', now(), now()),
('22222222-2222-2222-2222-222222222222', 'HRM', 'HR Manager', 'Quản lý nhân sự', now(), now()),
('22222222-2222-2222-2222-222222222223', 'DEV', 'Software Engineer', 'Kỹ sư phần mềm', now(), now());

insert into "departments" ("id", "code", "name", "description", "parent_id", "created_at", "updated_at") values
('33333333-3333-3333-3333-333333333331', 'COM', 'Company', 'Root level', NULL, now(), now()),
('33333333-3333-3333-3333-333333333332', 'HR', 'Human Resources', 'Phòng nhân sự', '33333333-3333-3333-3333-333333333331', now(), now()),
('33333333-3333-3333-3333-333333333333', 'ENG', 'Engineering', 'Phòng kỹ thuật', '33333333-3333-3333-3333-333333333331', now(), now());

insert into "users" ("id", "code", "work_email", "personal_email", "password", "active") values
('44444444-4444-4444-4444-444444444441', 'U001', 'admin@company.com', 'admin@personal.com', 'hashed_admin', true),
('44444444-4444-4444-4444-444444444442', 'U002', 'hr@company.com', 'hr@personal.com', 'hashed_hr', true),
('44444444-4444-4444-4444-444444444443', 'U003', 'dev@company.com', 'dev@personal.com', 'hashed_dev', true);

insert into "profiles" ("id", "full_name", "status", "profile_img", "date_of_birth", "gender", "phone_number", "description", "created_at", "updated_at") values
('44444444-4444-4444-4444-444444444441', 'Nguyễn Văn Admin', 'active', 'admin.png', '1985-01-01', 'MALE', '0900000001', 'Giám đốc', now(), now()),
('44444444-4444-4444-4444-444444444442', 'Trần Thị HR', 'active', 'hr.png', '1990-07-15', 'FEMALE', '0900000002', 'Trưởng phòng nhân sự', now(), now()),
('44444444-4444-4444-4444-444444444443', 'Lê Văn Dev', 'active', 'dev.png', '1996-05-20', 'MALE', '0900000003', 'Kỹ sư phần mềm', now(), now());

insert into "users_roles" ("user_id", "role_id") values
('44444444-4444-4444-4444-444444444441', '11111111-1111-1111-1111-111111111111'),
('44444444-4444-4444-4444-444444444442', '11111111-1111-1111-1111-111111111112'),
('44444444-4444-4444-4444-444444444443', '11111111-1111-1111-1111-111111111113');

insert into "users_positions" ("user_id", "position_id") values
('44444444-4444-4444-4444-444444444441', '22222222-2222-2222-2222-222222222221'), 
('44444444-4444-4444-4444-444444444442', '22222222-2222-2222-2222-222222222222'),
('44444444-4444-4444-4444-444444444443', '22222222-2222-2222-2222-222222222223');

insert into "users_departments" ("user_id", "department_id") values
('44444444-4444-4444-4444-444444444441', '33333333-3333-3333-3333-333333333331'), 
('44444444-4444-4444-4444-444444444442', '33333333-3333-3333-3333-333333333332'),
('44444444-4444-4444-4444-444444444443', '33333333-3333-3333-3333-333333333333'); 

insert into "positions_departments" ("position_id", "department_id") values
('22222222-2222-2222-2222-222222222221', '33333333-3333-3333-3333-333333333331'), 
('22222222-2222-2222-2222-222222222222', '33333333-3333-3333-3333-333333333332'), 
('22222222-2222-2222-2222-222222222223', '33333333-3333-3333-3333-333333333333');

select * from users;