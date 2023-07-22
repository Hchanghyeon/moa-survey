package com.moa.survey.member.dto.response;

import com.moa.survey.member.domain.AgeGroup;
import com.moa.survey.member.domain.BloodType;
import com.moa.survey.member.domain.Department;
import com.moa.survey.member.domain.Gender;
import com.moa.survey.member.domain.Job;
import com.moa.survey.member.domain.Mbti;
import com.moa.survey.member.domain.Member;
import lombok.Getter;

@Getter
public class MemberResponse {

    private Long memberId;
    private String email;
    private String password;
    private String nickname;
    private Gender gender;
    private AgeGroup ageGroup;
    private Mbti mbti;
    private BloodType bloodType;
    private Department department;
    private Job job;

    public MemberResponse(Member member) {
        this.memberId = member.getMemberId();
        this.email = member.getEmail();
        this.password = member.getPassword();
        this.nickname = member.getNickname();
        this.gender = member.getGender();
        this.ageGroup = member.getAgeGroup();
        this.mbti = member.getMbti();
        this.bloodType = member.getBloodType();
        this.department = member.getDepartment();
        this.job = member.getJob();
    }

}
