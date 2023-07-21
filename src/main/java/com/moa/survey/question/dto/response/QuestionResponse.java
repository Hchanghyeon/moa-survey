package com.moa.survey.question.dto.response;

import com.moa.survey.item.domain.Item;
import com.moa.survey.question.domain.Question;
import java.util.List;
import lombok.Getter;
import lombok.Setter;

@Getter
@Setter
public class QuestionResponse {

    private Long questionId;
    private String title;
    private List<Item> items;
    private String memberNickname;

    public QuestionResponse(Question question) {
        this.questionId = question.getQuestionId();
        this.title = question.getTitle();
        this.items = question.getItems();
        this.memberNickname = question.getMember().getNickname();
    }

}
