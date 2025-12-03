package com.shiftattendance.system.service;

import com.shiftattendance.system.object.entity.Role;
import com.shiftattendance.system.object.entity.RoleRepository;
import lombok.RequiredArgsConstructor;
import org.springframework.stereotype.Service;

import java.util.List;

@Service
@RequiredArgsConstructor
public class RoleServiceImpl implements RoleService {
    private final RoleRepository roleRepository;

    @Override
    public List<Role> getRoles() {
        return roleRepository.findAll();
    }

    @Override
    public Role createRole() {
        return null;
    }

    @Override
    public Role updateRole() {
        return null;
    }

    @Override
    public void deleteRoles(List<String> ids) {

    }
}
