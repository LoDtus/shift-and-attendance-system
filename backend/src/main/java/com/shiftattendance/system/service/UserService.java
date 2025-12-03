package com.shiftattendance.system.service;

import com.shiftattendance.system.object.dto.auth.ResetPasswordRequest;
import com.shiftattendance.system.object.dto.auth.SignInRequest;
import com.shiftattendance.system.object.dto.auth.SignUpRequest;
import com.shiftattendance.system.object.dto.user.UpdateUserRequest;
import com.shiftattendance.system.object.dto.common.ApiResponse;
import com.shiftattendance.system.object.dto.common.QueryRequest;
import com.shiftattendance.system.object.dto.filter.UserFilter;
import com.shiftattendance.system.object.dto.user.UserInfo;
import jakarta.servlet.http.HttpServletRequest;
import jakarta.servlet.http.HttpServletResponse;
import org.springframework.data.domain.Page;
import org.springframework.web.bind.annotation.RequestBody;

import java.util.List;

public interface UserService {
    UserInfo signUp(SignUpRequest request);
    UserInfo signIn(SignInRequest signInRequest, HttpServletRequest request, HttpServletResponse response);
    void signOut(HttpServletRequest request, HttpServletResponse response, Boolean all);
    void forgotPassword(String emailOrUsername);
    Boolean checkResetPasswordToken(String token);
    void resetPassword(ResetPasswordRequest request);
    Boolean existsByEmail(String email);
    Boolean existsByUsername(String username);
    void refreshToken(HttpServletRequest request, HttpServletResponse response);

    ApiResponse<Page<UserInfo>> getUsers(@RequestBody QueryRequest<UserFilter> request);
    UserInfo updateUser(HttpServletRequest request, UpdateUserRequest updateUserRequest);
    void deleteUsers(List<String> ids);
}
