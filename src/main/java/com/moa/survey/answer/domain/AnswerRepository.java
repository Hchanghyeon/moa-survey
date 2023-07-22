package com.moa.survey.answer.domain;

import com.moa.survey.item.domain.Item;
import com.moa.survey.member.domain.Member;
import java.util.List;
import java.util.Optional;
import org.springframework.data.jpa.repository.JpaRepository;

public interface AnswerRepository extends JpaRepository<Answer, Long> {

    Optional<Answer> findByMember(Member member);

    List<Answer> findByItem(Item item);
}
