package com.moa.survey.answer.domain;

import com.moa.survey.item.domain.Item;
import com.moa.survey.member.domain.Member;
import org.springframework.data.jpa.repository.JpaRepository;

import java.util.List;

public interface AnswerRepository extends JpaRepository<Answer, Long> {

    List<Answer> findByMember(Member member);

    List<Answer> findByItem(Item item);
}
