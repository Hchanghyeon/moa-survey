package com.moa.survey.member.application;

import com.moa.survey.member.domain.Member;
import com.moa.survey.member.dto.MemberCreateRequest;
import com.moa.survey.member.dto.MemberResponse;
import lombok.RequiredArgsConstructor;
import org.springframework.stereotype.Service;

@Service
@RequiredArgsConstructor
public class MemberService {

    private final MemberRepository memberRepository;

    public MemberResponse create(MemberCreateRequest memberCreateRequest) {

        memberRepository.findByEmail(memberCreateRequest.getEmail())
                .ifPresent(item -> {
                    throw new RuntimeException("이미 있는 계정입니다.");
                });

        Member member = memberRepository.save(memberCreateRequest.toMember());

        return new MemberResponse(member);
    }
    
}
