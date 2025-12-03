package com.shiftattendance.system.controller;

import org.springframework.http.ResponseEntity;

public interface RoleController {
    ResponseEntity<?> getRoles();
    ResponseEntity<?> createRole();
    ResponseEntity<?> updateRole();
    ResponseEntity<?> deleteRoles();
}
