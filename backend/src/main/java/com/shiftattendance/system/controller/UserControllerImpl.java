package com.shiftattendance.system.controller;

import lombok.RequiredArgsConstructor;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

@RestController
@RequiredArgsConstructor
@RequestMapping("/api/user")
public class UserControllerImpl implements UserController {
    @Override
    public ResponseEntity<?> find() {
        return null;
    }

    @Override
    public ResponseEntity<?> getOtherUser() {
        return null;
    }

    @Override
    public ResponseEntity<?> getMyProfile() {
        return null;
    }

    @Override
    public ResponseEntity<?> updateUser() {
        return null;
    }

    @Override
    public ResponseEntity<?> deleteUsers() {
        return null;
    }
}
