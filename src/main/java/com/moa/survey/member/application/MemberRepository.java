package com.moa.survey.member.application;

import com.moa.survey.member.domain.Member;
import java.util.Optional;
import org.springframework.data.jpa.repository.JpaRepository;

public interface MemberRepository extends JpaRepository<Member, Long> {

    @Override
    Member save(Member member);

    Optional<Member> findByEmail(String email);

    boolean existsByEmail(String email);
}
