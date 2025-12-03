package com.shiftattendance.system.controller;

import com.shiftattendance.system.object.dto.common.ApiResponse;
import com.shiftattendance.system.object.dto.common.QueryRequest;
import com.shiftattendance.system.object.dto.filter.UserFilter;
import com.shiftattendance.system.object.dto.user.UserInfo;
import com.shiftattendance.system.service.UserService;
import lombok.RequiredArgsConstructor;
import org.springframework.data.domain.Page;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

@RestController
@RequiredArgsConstructor
@RequestMapping("/api/user")
public class UserControllerImpl implements UserController {
    private final UserService userService;

    @Override
    public ResponseEntity<ApiResponse<Page<UserInfo>>> getUsers(@RequestBody QueryRequest<UserFilter> request) {
        ApiResponse<Page<UserInfo>> response = userService.getUsers(request);
        return ResponseEntity.ok(response);
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
