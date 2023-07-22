package com.moa.survey.question.dto.request;

import jakarta.validation.constraints.NotBlank;
import jakarta.validation.constraints.NotEmpty;
import jakarta.validation.constraints.Size;
import java.util.List;
import lombok.Getter;

@Getter
public class QuestionCreateRequest {

    @NotBlank(message = "입력값이 없거나, '', ' '일 수 없습니다.")
    private String title;

    @Size(min = 4)
    @NotEmpty(message = "입력값이 없을 수 없습니다. 항목을 입력해주세요")
    private List<String> items;

    public QuestionCreateRequest(String title, List<String> items) {
        this.title = title;
        this.items = items;
    }

}
