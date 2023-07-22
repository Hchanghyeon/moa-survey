package com.moa.survey.answer.dto.response;

import com.moa.survey.answer.domain.Answer;
import com.moa.survey.member.domain.AgeGroup;
import com.moa.survey.member.domain.BloodType;
import com.moa.survey.member.domain.Department;
import com.moa.survey.member.domain.Gender;
import com.moa.survey.member.domain.Job;
import com.moa.survey.member.domain.Mbti;
import lombok.Getter;
import lombok.Setter;

@Setter
@Getter
public class AnswerResponse {

    private Long answerId;
    private Gender memberGender;
    private AgeGroup memberAgeGroup;
    private Mbti memberMbti;
    private BloodType memberBloodType;
    private Department memberDepartment;
    private Job memberJob;
    private Long itemId;

    public AnswerResponse(Answer answer) {
        this.answerId = answer.getAnswerId();
        this.memberGender = answer.getMember().getGender();
        this.memberAgeGroup = answer.getMember().getAgeGroup();
        this.memberMbti = answer.getMember().getMbti();
        this.memberBloodType = answer.getMember().getBloodType();
        this.memberDepartment = answer.getMember().getDepartment();
        this.memberJob = answer.getMember().getJob();
        this.itemId = answer.getItem().getItemId();
    }

}
