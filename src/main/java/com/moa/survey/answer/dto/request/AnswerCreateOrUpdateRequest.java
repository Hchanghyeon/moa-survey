package com.moa.survey.answer.dto.request;

import lombok.Getter;

@Getter
public class AnswerCreateOrUpdateRequest {

    private Long memberId;
    private Long itemId;

    private AnswerCreateOrUpdateRequest(Long memberId, Long itemId) {
        this.memberId = memberId;
        this.itemId = itemId;
    }

}
