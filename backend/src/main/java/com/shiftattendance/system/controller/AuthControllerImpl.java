package com.shiftattendance.system.controller;

import lombok.RequiredArgsConstructor;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

@RestController
@RequiredArgsConstructor
@RequestMapping("/api/auth")
public class AuthControllerImpl implements AuthController {
    @Override
    @GetMapping("/check-exists")
    public ResponseEntity<?> checkExists() {
        return null;
    }

    @Override
    @PostMapping("/sign-up")
    public ResponseEntity<?> signUp() {
        return null;
    }

    @Override
    @PostMapping("/sign-in")
    public ResponseEntity<?> signIn() {
        return null;
    }

    @Override
    @PostMapping("/sign-in")
    public ResponseEntity<?> signOut() {
        return null;
    }

    @Override
    @PostMapping("/forgot-password")
    public ResponseEntity<?> forgotPassword() {
        return null;
    }

    @Override
    @PostMapping("/check-reset-password-token")
    public ResponseEntity<?> checkResetPasswordToken() {
        return null;
    }

    @Override
    @PostMapping("/reset-password")
    public ResponseEntity<?> resetPassword() {
        return null;
    }

    @Override
    @PostMapping("/refresh-access-token")
    public ResponseEntity<?> refreshAccessToken() {
        return null;
    }
}
