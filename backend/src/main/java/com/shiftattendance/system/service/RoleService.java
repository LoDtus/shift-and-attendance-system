package com.shiftattendance.system.service;

import com.shiftattendance.system.object.entity.Role;

import java.util.List;

public interface RoleService {
    List<Role> getRoles();
    Role createRole();
    Role updateRole();
    void deleteRoles(List<String> ids);
}
