package com.moa.survey.question.api;

import com.moa.survey.question.application.QuestionService;
import com.moa.survey.question.dto.request.QuestionCreateRequest;
import com.moa.survey.question.dto.response.QuestionResponse;
import java.util.List;
import lombok.RequiredArgsConstructor;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestAttribute;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

@RestController
@RequestMapping("/api/questions")
@RequiredArgsConstructor
public class QuestionController {

    private final QuestionService questionService;

    @GetMapping
    public ResponseEntity<List<QuestionResponse>> findAll() {
        List<QuestionResponse> questionsResponse = questionService.findAll();

        return ResponseEntity.ok(questionsResponse);
    }

    @PostMapping
    public ResponseEntity<Long> create(@RequestBody QuestionCreateRequest questionCreateRequest, @RequestAttribute String email) {
        Long questionIdResponse = questionService.create(questionCreateRequest, email);

        return ResponseEntity.ok(questionIdResponse);
    }

    @GetMapping("/{id}")
    public ResponseEntity<QuestionResponse> find(@PathVariable("id") Long questionId) {
        QuestionResponse questionsResponse = questionService.findById(questionId);

        return ResponseEntity.ok(questionsResponse);
    }

}
