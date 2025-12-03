package com.shiftattendance.system.object.dto.filter;

import lombok.AllArgsConstructor;
import lombok.Getter;
import lombok.NoArgsConstructor;

import java.time.Instant;
import java.util.List;

@Getter
@NoArgsConstructor
public class UserFilter {
    private String id;
    private String role;
    private String address;
    private String status;
    private String active;
    private List<Instant> dateOfBirth;
    private List<Instant> createdAt;

    private String keyword;
}
