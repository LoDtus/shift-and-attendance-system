package com.shiftattendance.system.controller;

import lombok.RequiredArgsConstructor;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

@RestController
@RequiredArgsConstructor
@RequestMapping("/api/user")
public class UserControllerImpl implements UserController {
    @PostMapping("/find")
    public ResponseEntity<?> find() {
        return null;
    }

    @GetMapping("/other-user")
    public ResponseEntity<?> getOtherUser() {
        return null;
    }

    @GetMapping("/me")
    public ResponseEntity<?> getMyProfile() {
        return null;
    }

    @PutMapping("/update")
    public ResponseEntity<?> updateUser() {
        return null;
    }

    @DeleteMapping("/delete")
    public ResponseEntity<?> deleteUsers() {
        return null;
    }
}
