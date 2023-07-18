package com.moa.survey.member.application;

import com.moa.survey.member.domain.Member;
import com.moa.survey.member.dto.request.MemberCreateRequest;
import com.moa.survey.member.dto.response.MemberResponse;
import lombok.RequiredArgsConstructor;
import org.springframework.stereotype.Service;

@Service
@RequiredArgsConstructor
public class MemberService {

    private final MemberRepository memberRepository;

    public MemberResponse create(MemberCreateRequest memberCreateRequest) {

        boolean result = memberRepository.existsByEmail(memberCreateRequest.getEmail());

        if (result) {
            throw new RuntimeException("이미 있는 계정입니다.");
        }

        Member member = memberRepository.save(memberCreateRequest.toMember());

        return new MemberResponse(member);
    }

    public MemberResponse findByEmail(String email) {

        Member member = memberRepository.findByEmail(email)
                .orElseThrow(() -> new RuntimeException("찾는 유저가 회원가입이 되어있지 않습니다."));

        return new MemberResponse(member);
    }
}
