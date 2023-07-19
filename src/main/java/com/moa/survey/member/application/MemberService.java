package com.moa.survey.member.application;

import com.moa.survey.member.auth.TokenProvider;
import com.moa.survey.member.auth.TokenResponse;
import com.moa.survey.member.domain.Member;
import com.moa.survey.member.domain.MemberRepository;
import com.moa.survey.member.dto.request.MemberCreateRequest;
import com.moa.survey.member.dto.request.MemberLoginRequest;
import com.moa.survey.member.dto.response.MemberResponse;
import com.moa.survey.member.util.EncryptionUtil;
import java.util.NoSuchElementException;
import lombok.RequiredArgsConstructor;
import org.springframework.dao.DuplicateKeyException;
import org.springframework.stereotype.Service;

@Service
@RequiredArgsConstructor
public class MemberService {

    private final MemberRepository memberRepository;
    private final TokenProvider tokenProvider;

    public MemberResponse create(MemberCreateRequest memberCreateRequest) {

        boolean result = memberRepository.existsByEmail(memberCreateRequest.getEmail());

        if (result) {
            throw new DuplicateKeyException("이미 있는 계정입니다.");
        }

        Member member = memberRepository.save(memberCreateRequest.toMember());

        return new MemberResponse(member);
    }

    public TokenResponse login(MemberLoginRequest memberLoginRequest) {

        Member member = memberRepository.findByEmail(memberLoginRequest.getEmail())
                .orElseThrow(() -> new NoSuchElementException("로그인하려는 계정이 존재하지 않습니다."));

        if (EncryptionUtil.checkPassword(memberLoginRequest.getPassword(), member.getPassword())) {

            String token = tokenProvider.createToken(member.getEmail());

            return new TokenResponse(token, member.getNickname());
        }

        throw new IllegalArgumentException("입력된 값은 잘못된 입력 값입니다. 아이디와 패스워드를 다시 한 번 확인해주세요.");
    }
}
