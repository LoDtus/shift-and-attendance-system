package com.shiftattendance.system.controller;

import com.shiftattendance.system.object.dto.common.ApiResponse;
import com.shiftattendance.system.object.dto.common.QueryRequest;
import com.shiftattendance.system.object.dto.filter.UserFilter;
import com.shiftattendance.system.object.dto.user.UserInfo;
import org.springframework.data.domain.Page;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.RequestBody;

public interface UserController {
    ResponseEntity<ApiResponse<Page<UserInfo>>> getUsers(@RequestBody QueryRequest<UserFilter> request);
    ResponseEntity<?> updateUser();
    ResponseEntity<?> deleteUsers();
}
