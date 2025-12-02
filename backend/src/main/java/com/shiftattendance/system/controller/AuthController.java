package com.shiftattendance.system.controller;

import org.springframework.http.ResponseEntity;

public interface AuthController {
    ResponseEntity<?> checkExists();
    ResponseEntity<?> signUp();
    ResponseEntity<?> signIn();
    ResponseEntity<?> signOut();
    ResponseEntity<?> forgotPassword();
    ResponseEntity<?> checkResetPasswordToken();
    ResponseEntity<?> resetPassword();
    ResponseEntity<?> refreshAccessToken();
}