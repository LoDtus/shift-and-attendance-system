package com.shiftattendance.system.object.entity;

import jakarta.persistence.*;
import lombok.AllArgsConstructor;
import lombok.Builder;
import lombok.Data;
import lombok.NoArgsConstructor;
//import org.springframework.security.core.GrantedAuthority;
//import org.springframework.security.core.userdetails.UserDetails;


@Data
@NoArgsConstructor
@AllArgsConstructor
@Builder(toBuilder = true)
@Entity
@Table(name = "user")
public class User {
    @Id
    private String id;

    @Column(name = "employee_code")
    private String employeeCode;

    @Column(name = "work_email")
    private String workEmail;

    @Column(name = "personal_email")
    private String personalEmail;

    @Column(name = "password")
    private String password;

    @Column(name = "active")
    private Boolean active;

//    @Override
//    public Collection<? extends GrantedAuthority> getAuthorities() {
//        return List.of();
//    }
//
//    @Override
//    public boolean isAccountNonExpired() {
//        return UserDetails.super.isAccountNonExpired();
//    }
//
//    @Override
//    public boolean isAccountNonLocked() {
//        return UserDetails.super.isAccountNonLocked();
//    }
//
//    @Override
//    public boolean isCredentialsNonExpired() {
//        return UserDetails.super.isCredentialsNonExpired();
//    }
//
//    @Override
//    public boolean isEnabled() {
//        return UserDetails.super.isEnabled();
//    }

    @PrePersist
    public void generateId() {
        if (this.id == null) {
//            this.id = "user-" + UUID.randomUUID();
        }
    }
}