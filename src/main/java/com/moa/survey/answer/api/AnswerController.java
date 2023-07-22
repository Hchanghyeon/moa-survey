package com.moa.survey.answer.api;

import com.moa.survey.answer.application.AnswerService;
import com.moa.survey.answer.dto.request.AnswerCreateOrUpdateRequest;
import com.moa.survey.answer.dto.response.AnswerResponse;
import jakarta.validation.Valid;
import java.util.List;
import lombok.RequiredArgsConstructor;
import org.springframework.http.ResponseEntity;
import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestAttribute;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;

@Controller
@RequestMapping("/api/answers")
@RequiredArgsConstructor
public class AnswerController {

    private final AnswerService answerService;

    @PostMapping
    public ResponseEntity<Long> createOrUpdate(@Valid @RequestBody AnswerCreateOrUpdateRequest answerCreateOrUpdateRequest, @RequestAttribute String email) {
        Long responseAnswerId = answerService.createOrUpdate(answerCreateOrUpdateRequest, email);
        return ResponseEntity.ok(responseAnswerId);
    }

    @GetMapping("/{id}")
    public ResponseEntity<List<AnswerResponse>> findByItemId(@PathVariable("id") Long itemId) {
        List<AnswerResponse> answerResponses = answerService.findByItemId(itemId);
        return ResponseEntity.ok(answerResponses);
    }

}
