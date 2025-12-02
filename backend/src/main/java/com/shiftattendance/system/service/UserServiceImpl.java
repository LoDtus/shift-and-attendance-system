package com.shiftattendance.system.service;

import com.shiftattendance.system.object.dto.auth.ResetPasswordRequest;
import com.shiftattendance.system.object.dto.auth.SignInRequest;
import com.shiftattendance.system.object.dto.auth.SignUpRequest;
import com.shiftattendance.system.object.dto.auth.UpdateUserRequest;
import com.shiftattendance.system.object.dto.user.UserInfo;
import jakarta.servlet.http.HttpServletRequest;
import jakarta.servlet.http.HttpServletResponse;
import lombok.RequiredArgsConstructor;
import org.springframework.stereotype.Service;

import java.util.List;

@Service
@RequiredArgsConstructor
public class UserServiceImpl implements UserService {
    @Override
    public UserInfo signUp(SignUpRequest request) {
        return null;
    }

    @Override
    public UserInfo signIn(SignInRequest signInRequest, HttpServletRequest request, HttpServletResponse response) {
        return null;
    }

    @Override
    public void signOut(HttpServletRequest request, HttpServletResponse response, Boolean all) {

    }

    @Override
    public void forgotPassword(String emailOrUsername) {

    }

    @Override
    public Boolean checkResetPasswordToken(String token) {
        return null;
    }

    @Override
    public void resetPassword(ResetPasswordRequest request) {

    }

    @Override
    public Boolean existsByEmail(String email) {
        return null;
    }

    @Override
    public Boolean existsByUsername(String username) {
        return null;
    }

    @Override
    public void refreshToken(HttpServletRequest request, HttpServletResponse response) {

    }

    @Override
    public void getUsers() {

    }

    @Override
    public UserInfo updateUser(HttpServletRequest request, UpdateUserRequest updateUserRequest) {
        return null;
    }

    @Override
    public void deleteUsers(List<String> ids) {

    }
}
