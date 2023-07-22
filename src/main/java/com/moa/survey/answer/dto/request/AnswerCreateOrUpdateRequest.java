package com.moa.survey.answer.dto.request;

import lombok.Getter;
import lombok.Setter;

@Setter
@Getter
public class AnswerCreateOrUpdateRequest {

    private Long memberId;
    private Long itemId;

    public AnswerCreateOrUpdateRequest(Long memberId, Long itemId) {
        this.memberId = memberId;
        this.itemId = itemId;
    }

}
