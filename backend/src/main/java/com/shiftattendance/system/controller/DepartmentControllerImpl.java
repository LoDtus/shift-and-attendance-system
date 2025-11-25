package com.shiftattendance.system.controller;

import lombok.RequiredArgsConstructor;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import java.util.List;

@RestController
@RequiredArgsConstructor
@RequestMapping("/api/department")
public class DepartmentControllerImpl implements DepartmentController {
    @Override
    public ResponseEntity<?> getDepartments() {
        return null;
    }

    @Override
    public ResponseEntity<?> createDepartment() {
        return null;
    }

    @Override
    public ResponseEntity<?> updateDepartment() {
        return null;
    }

    @Override
    public ResponseEntity<?> deleteDepartments(List<String> ids) {
        return null;
    }
}
