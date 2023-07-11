package com.moa.survey.member.domain.entity;

import jakarta.persistence.Column;
import jakarta.persistence.Entity;
import jakarta.persistence.GeneratedValue;
import jakarta.persistence.GenerationType;
import jakarta.persistence.Id;
import jakarta.validation.constraints.NotNull;
import lombok.Builder;

@Entity
public class Member {

    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long id;

    @Column(nullable = false, length = 50, unique = true)
    @NotNull
    private String email;

    @Column(nullable = false, length = 50)
    @NotNull
    private String password;

    @Column(nullable = false, length = 10)
    @NotNull
    private String gender;

    @Column(nullable = false, length = 10)
    @NotNull
    private int ageGroup;

    @Column(nullable = false, length = 10)
    @NotNull
    private String mbti;

    @Column(nullable = false, length = 5)
    @NotNull
    private String bloodType;

    @Column(nullable = false, length = 5)
    @NotNull
    private String department;

    @Column(nullable = false, length = 10)
    @NotNull
    private String job;

    @Builder
    public Member(String email, String password, String gender, int ageGroup, String mbti, String bloodType, String department, String job) {
        this.email = email;
        this.password = password;
        this.gender = gender;
        this.ageGroup = ageGroup;
        this.mbti = mbti;
        this.bloodType = bloodType;
        this.department = department;
        this.job = job;
    }
}
