package com.moa.survey.question.dto.response;

import com.moa.survey.item.domain.Item;
import com.moa.survey.question.domain.Question;
import java.util.List;
import lombok.Getter;

@Getter
public class QuestionResponse {

    private Long questionId;
    private String title;
    private List<Item> items;
    private Long memberId;
    private String memberNickname;

    public QuestionResponse(Question question) {
        this.questionId = question.getQuestionId();
        this.title = question.getTitle();
        this.items = question.getItems();
        this.memberId = question.getMember().getMemberId();
        this.memberNickname = question.getMember().getNickname();
    }

}
