package com.moa.survey.member.api;

import com.moa.survey.member.application.MemberService;
import com.moa.survey.member.auth.TokenResponse;
import com.moa.survey.member.dto.request.MemberCreateRequest;
import com.moa.survey.member.dto.request.MemberLoginRequest;
import com.moa.survey.member.dto.response.MemberResponse;
import lombok.RequiredArgsConstructor;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

@RestController
@RequestMapping("/api/member")
@RequiredArgsConstructor
public class MemberController {

    private final MemberService memberService;

    @PostMapping
    public ResponseEntity<MemberResponse> create(@RequestBody MemberCreateRequest memberCreateRequest) {
        MemberResponse memberResponse = memberService.create(memberCreateRequest);
        return ResponseEntity.ok(memberResponse);
    }

    @PostMapping("/auth")
    public ResponseEntity<TokenResponse> login(@RequestBody MemberLoginRequest memberLoginRequest) {

        TokenResponse tokenResponse = memberService.login(memberLoginRequest);

        return ResponseEntity.ok(tokenResponse);
    }

}
