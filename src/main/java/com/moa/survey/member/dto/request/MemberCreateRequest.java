package com.moa.survey.member.dto.request;

import com.moa.survey.member.domain.Member;
import com.moa.survey.member.domain.enumtype.AgeGroup;
import com.moa.survey.member.domain.enumtype.BloodType;
import com.moa.survey.member.domain.enumtype.Department;
import com.moa.survey.member.domain.enumtype.Gender;
import com.moa.survey.member.domain.enumtype.Job;
import com.moa.survey.member.domain.enumtype.Mbti;
import com.moa.survey.member.util.EncryptionUtil;
import jakarta.validation.constraints.Email;
import jakarta.validation.constraints.NotBlank;
import jakarta.validation.constraints.NotNull;
import jakarta.validation.constraints.Size;
import lombok.Getter;

@Getter
public class MemberCreateRequest {

    @Email(message = "이메일 양식에 맞춰서 입력해주세요.")
    @NotBlank(message = "입력값이 없거나, '', ' '일 수 없습니다.")
    @Size(min = 3, max = 50)
    private String email;

    @NotBlank(message = "입력값이 없거나, '', ' '일 수 없습니다.")
    @Size(min = 1, max = 100)
    private String password;

    @NotBlank(message = "입력값이 없거나, '', ' '일 수 없습니다.")
    @Size(min = 1, max = 30)
    private String nickname;

    @NotNull
    private Gender gender;

    @NotNull
    private AgeGroup ageGroup;

    @NotNull
    private Mbti mbti;

    @NotNull
    private BloodType bloodType;

    @NotNull
    private Department department;

    @NotNull
    private Job job;

    public MemberCreateRequest(String email, String password, String nickname, Gender gender, AgeGroup ageGroup, Mbti mbti, BloodType bloodType, Department department, Job job) {
        this.email = email;
        this.password = password;
        this.nickname = nickname;
        this.gender = gender;
        this.ageGroup = ageGroup;
        this.mbti = mbti;
        this.bloodType = bloodType;
        this.department = department;
        this.job = job;
    }

    public Member toMember() {
        return Member.builder()
                .email(email)
                .password(EncryptionUtil.hashPassword(password))
                .nickname(nickname)
                .gender(gender)
                .ageGroup(ageGroup)
                .bloodType(bloodType)
                .mbti(mbti)
                .department(department)
                .job(job)
                .build();
    }

}
