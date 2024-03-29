package com.moa.survey.answer.application;

import com.moa.survey.answer.domain.Answer;
import com.moa.survey.answer.domain.AnswerRepository;
import com.moa.survey.answer.dto.request.AnswerCreateOrUpdateRequest;
import com.moa.survey.answer.dto.response.AnswerResponse;
import com.moa.survey.item.domain.Item;
import com.moa.survey.item.repository.ItemRepository;
import com.moa.survey.member.domain.Member;
import com.moa.survey.member.domain.MemberRepository;
import lombok.RequiredArgsConstructor;
import org.springframework.stereotype.Service;
import org.springframework.transaction.annotation.Transactional;

import java.util.List;
import java.util.NoSuchElementException;

@Service
@RequiredArgsConstructor
public class AnswerService {

    private final AnswerRepository answerRepository;
    private final MemberRepository memberRepository;
    private final ItemRepository itemRepository;

    @Transactional
    public Long createOrUpdate(AnswerCreateOrUpdateRequest answerCreateOrUpdateRequest, String email) {

        Member member = memberRepository.findByEmail(email)
                .orElseThrow(() -> new NoSuchElementException("찾는 유저가 없습니다."));
        
        Item item = itemRepository.findById(answerCreateOrUpdateRequest.getItemId())
                .orElseThrow(() -> new NoSuchElementException("찾는 질문의 문항이 없습니다."));

        List<Answer> findAnswer = answerRepository.findByMember(member);

        List<Answer> filteredAnswer = findAnswer.stream()
                .filter((answer) -> answer.getItem().getQuestion().getQuestionId().equals(item.getQuestion().getQuestionId()))
                .toList();

        if (filteredAnswer.isEmpty()) {
            Answer answer = Answer.builder()
                    .member(member)
                    .item(item)
                    .build();

            Answer savedAnswer = answerRepository.save(answer);

            return savedAnswer.getAnswerId();
        }

        filteredAnswer.get(0).changeMember(member);
        filteredAnswer.get(0).changeItem(item);

        return findAnswer.get(0).getAnswerId();
    }

    @Transactional(readOnly = true)
    public List<AnswerResponse> findByItemId(Long itemId) {

        Item item = itemRepository.findById(itemId)
                .orElseThrow(() -> new NoSuchElementException("찾는 질문의 문항이 없습니다."));

        List<Answer> findAnswers = answerRepository.findByItem(item);

        return findAnswers.stream()
                .map(AnswerResponse::new)
                .toList();
    }

}
