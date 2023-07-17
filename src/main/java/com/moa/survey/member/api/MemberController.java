package com.moa.survey.member.api;

import com.moa.survey.member.application.MemberService;
import com.moa.survey.member.dto.MemberCreateRequest;
import com.moa.survey.member.dto.MemberResponse;
import jakarta.validation.Valid;
import lombok.RequiredArgsConstructor;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

@RestController
@RequestMapping("/api/member")
@RequiredArgsConstructor
public class MemberController {

    private final MemberService memberService;

    @PostMapping
    public ResponseEntity<MemberResponse> create(@Valid MemberCreateRequest memberCreateRequest) {
        MemberResponse memberResponse = memberService.create(memberCreateRequest);
        return ResponseEntity.ok(memberResponse);
    }
    
}
