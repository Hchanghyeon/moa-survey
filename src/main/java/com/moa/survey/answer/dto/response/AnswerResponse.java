package com.moa.survey.answer.dto.response;

import com.moa.survey.answer.domain.Answer;
import com.moa.survey.member.domain.enumtype.AgeGroup;
import com.moa.survey.member.domain.enumtype.BloodType;
import com.moa.survey.member.domain.enumtype.Department;
import com.moa.survey.member.domain.enumtype.Gender;
import com.moa.survey.member.domain.enumtype.Job;
import com.moa.survey.member.domain.enumtype.Mbti;
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
