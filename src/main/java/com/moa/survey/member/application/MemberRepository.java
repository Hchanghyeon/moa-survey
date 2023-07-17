package com.moa.survey.member.application;

import com.moa.survey.member.domain.Member;
import org.springframework.data.jpa.repository.JpaRepository;

import java.util.Optional;

public interface MemberRepository extends JpaRepository<Member, Long> {

    @Override
    Member save(Member member);

    Optional<Member> findByEmail(String email);
}
