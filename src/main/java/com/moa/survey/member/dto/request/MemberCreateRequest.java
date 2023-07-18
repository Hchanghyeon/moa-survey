package com.moa.survey.member.dto.request;

import com.moa.survey.member.domain.Member;
import lombok.Builder;
import lombok.Getter;
import lombok.Setter;

@Setter
@Getter
public class MemberCreateRequest {

    private String email;
    private String password;
    private String nickname;
    private String gender;
    private int ageGroup;
    private String mbti;
    private String bloodType;
    private String department;
    private String job;

    @Builder
    private MemberCreateRequest(String email, String password, String nickname, String gender, int ageGroup, String mbti, String bloodType, String department, String job) {
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
                .password(password)
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
