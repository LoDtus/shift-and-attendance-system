package com.shiftattendance.system.service;

import com.shiftattendance.system.object.dto.auth.ResetPasswordRequest;
import com.shiftattendance.system.object.dto.auth.SignInRequest;
import com.shiftattendance.system.object.dto.auth.SignUpRequest;
import com.shiftattendance.system.object.dto.user.UpdateUserRequest;
import com.shiftattendance.system.object.dto.common.ApiResponse;
import com.shiftattendance.system.object.dto.common.PaginationRequest;
import com.shiftattendance.system.object.dto.common.QueryRequest;
import com.shiftattendance.system.object.dto.filter.UserFilter;
import com.shiftattendance.system.object.dto.user.UserInfo;
import com.shiftattendance.system.object.entity.Profile;
import com.shiftattendance.system.object.entity.ProfileRepository;
import com.shiftattendance.system.object.entity.User;
import com.shiftattendance.system.object.entity.UserRepository;
import jakarta.servlet.http.HttpServletRequest;
import jakarta.servlet.http.HttpServletResponse;
import lombok.RequiredArgsConstructor;
import org.springframework.data.domain.Page;
import org.springframework.data.domain.PageRequest;
import org.springframework.data.domain.Pageable;
import org.springframework.data.domain.Sort;
import org.springframework.data.jpa.domain.Specification;
import org.springframework.stereotype.Service;
import org.springframework.web.bind.annotation.RequestBody;

import java.util.List;

@Service
@RequiredArgsConstructor
public class UserServiceImpl implements UserService {
    private final UserRepository userRepository;
    private final ProfileRepository profileRepository;

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

    private UserInfo toResponse(User user) {
        Profile profile = user.getProfile(); // giả sử đã có @OneToOne

        return UserResponse.builder()
                .id(user.getId())
                .code(user.getCode())
                .workEmail(user.getWorkEmail())
                .personalEmail(user.getPersonalEmail())
                .active(user.getActive())
                .fullName(profile != null ? profile.getFullName() : null)
                .status(profile != null ? profile.getStatus() : null)
                .phoneNumber(profile != null ? profile.getPhoneNumber() : null)
                .profileImg(profile != null ? profile.getProfileImg() : null)
                .dateOfBirth(profile != null ? profile.getDateOfBirth() : null)
                .gender(profile != null ? profile.getGender() : null)
                .createdAt(user.getCreatedAt() != null ? user.getCreatedAt() : (profile != null ? profile.getCreatedAt() : null))
                .updatedAt(profile != null ? profile.getUpdatedAt() : null)
                .build();
    }

    @Override
    public ApiResponse<Page<UserInfo>> getUsers(@RequestBody QueryRequest<UserFilter> request) {
        UserFilter filter = request.getFilter() != null ? request.getFilter() : new UserFilter();
        PaginationRequest pagination = request.getPagination() != null
                ? request.getPagination()
                : new PaginationRequest(); // default page=0, size=20, sortBy=id, asc

        Specification<User> spec = UserSpecifications.withFilter(filter);

        Pageable pageable = PageRequest.of(
                pagination.getPage(),
                pagination.getSize(),
                Sort.Direction.fromString(pagination.getSortDirection()),
                pagination.getSortBy()
        );

        Page<User> page = userRepository.findAll(spec, pageable);
        Page<UserInfo> result = page.map(this::toResponse);

        return ApiResponse.<Page<UserInfo>>builder()
                .statusCode(200)
                .total(result.getTotalElements())
                .data(result)
                .build();
    }

    @Override
    public UserInfo updateUser(HttpServletRequest request, UpdateUserRequest updateUserRequest) {
        return null;
    }

    @Override
    public void deleteUsers(List<String> ids) {

    }
}
