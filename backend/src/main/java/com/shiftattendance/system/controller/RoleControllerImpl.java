package com.shiftattendance.system.controller;

import com.shiftattendance.system.service.RoleService;
import lombok.RequiredArgsConstructor;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

@RestController
@RequiredArgsConstructor
@RequestMapping("/api/role")
public class RoleControllerImpl implements RoleController {
    private final RoleService roleService;

    @Override
    @GetMapping("/get")
    public ResponseEntity<?> getRoles() {
        return ResponseEntity.ok(roleService.getRoles());
    }

    @Override
    public ResponseEntity<?> createRole() {
        return null;
    }

    @Override
    public ResponseEntity<?> updateRole() {
        return null;
    }

    @Override
    public ResponseEntity<?> deleteRoles() {
        return null;
    }
}
