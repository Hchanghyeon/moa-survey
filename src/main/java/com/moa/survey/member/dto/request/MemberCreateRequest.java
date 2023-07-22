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
import lombok.Builder;
import lombok.Getter;
import lombok.Setter;

@Setter
@Getter
public class MemberCreateRequest {

    @Email
    private String email;
    private String password;
    private String nickname;
    private Gender gender;
    private AgeGroup ageGroup;
    private Mbti mbti;
    private BloodType bloodType;
    private Department department;
    private Job job;

    @Builder
    private MemberCreateRequest(String email, String password, String nickname, Gender gender, AgeGroup ageGroup, Mbti mbti, BloodType bloodType, Department department, Job job) {
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
