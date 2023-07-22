package com.moa.survey.answer.application;

import com.moa.survey.answer.domain.Answer;
import lombok.Getter;
import lombok.Setter;

@Setter
@Getter
public class AnswerResponse {

    private Long answerId;
    private String memberGender;
    private int memberAgeGroup;
    private String memberMbti;
    private String memberBloodType;
    private String memberDepartment;
    private String memberJob;
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
