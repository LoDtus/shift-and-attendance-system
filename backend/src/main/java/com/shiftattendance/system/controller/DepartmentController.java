package com.shiftattendance.system.controller;

import org.springframework.http.ResponseEntity;

import java.util.List;

public interface DepartmentController {
    ResponseEntity<?> getDepartments();
    ResponseEntity<?> createDepartment();
    ResponseEntity<?> updateDepartment();
    ResponseEntity<?> deleteDepartments(List<String> ids);
}
