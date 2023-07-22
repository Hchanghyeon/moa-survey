package com.moa.survey.question.dto.request;

import java.util.List;
import lombok.Getter;

@Getter
public class QuestionCreateRequest {

    private String title;
    private List<String> items;

    public QuestionCreateRequest(String title, List<String> items) {
        this.title = title;
        this.items = items;
    }

}
