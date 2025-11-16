package com.shiftattendance.system.object.entity;

import jakarta.persistence.Column;
import jakarta.persistence.Entity;
import jakarta.persistence.Id;
import jakarta.persistence.Table;
import lombok.AllArgsConstructor;
import lombok.Builder;
import lombok.Data;
import lombok.NoArgsConstructor;

@Data
@NoArgsConstructor
@AllArgsConstructor
@Builder(toBuilder = true)
@Entity
@Table(name = "profile")
public class Profile {
    @Id
    private String id;

    @Column(name = "full_name")
    private String fullName;

    @Column(name = "status")
    private String status;

    @Column(name = "profile_img")
    private String profileImg;

    @Column(name = "date_of_birth")
    private String dateOfBirth;

    @Column(name = "gender_id")
    private String genderId;

    @Column(name = "phone_number")
    private String phoneNumber;

    @Column(name = "description")
    private String description;

    @Column(name = "created_at")
    private String createdAt;

    @Column(name = "updated_at")
    private String updatedAt;
}
