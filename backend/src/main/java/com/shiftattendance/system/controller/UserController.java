package com.shiftattendance.system.controller;

import org.springframework.http.ResponseEntity;

public interface UserController {
    ResponseEntity<?> find();
    ResponseEntity<?> getOtherUser();
    ResponseEntity<?> getMyProfile();
    ResponseEntity<?> updateUser();
    ResponseEntity<?> deleteUsers();
}
