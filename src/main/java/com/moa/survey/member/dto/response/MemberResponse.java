package com.moa.survey.member.dto.response;

import com.moa.survey.member.domain.Member;
import com.moa.survey.question.domain.Question;
import java.util.List;
import lombok.Getter;

@Getter
public class MemberResponse {

    private Long memberId;
    private String email;
    private String password;
    private String nickname;
    private String gender;
    private Integer ageGroup;
    private String mbti;
    private String bloodType;
    private String department;
    private String job;
    private List<Question> questionList;

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
        this.questionList = member.getQuestionList();
    }
    
}
