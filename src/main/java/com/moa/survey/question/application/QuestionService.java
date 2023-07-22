package com.moa.survey.question.application;

import com.moa.survey.item.domain.Item;
import com.moa.survey.item.repository.ItemRepository;
import com.moa.survey.member.domain.Member;
import com.moa.survey.member.domain.MemberRepository;
import com.moa.survey.question.domain.Question;
import com.moa.survey.question.domain.QuestionRepository;
import com.moa.survey.question.dto.request.QuestionCreateRequest;
import com.moa.survey.question.dto.response.QuestionResponse;
import java.util.List;
import java.util.NoSuchElementException;
import lombok.RequiredArgsConstructor;
import org.springframework.stereotype.Service;
import org.springframework.transaction.annotation.Transactional;

@Service
@RequiredArgsConstructor
public class QuestionService {

    private final QuestionRepository questionRepository;
    private final MemberRepository memberRepository;
    private final ItemRepository itemRepository;

    @Transactional
    public Long create(QuestionCreateRequest questionCreateRequest, String email) {

        Member member = memberRepository.findByEmail(email)
                .orElseThrow(() -> new NoSuchElementException("작성하려는 유저의 이메일이 잘못되었습니다."));

        Question newQuestion = Question.builder()
                .title(questionCreateRequest.getTitle())
                .member(member)
                .build();

        Question savedQuestion = questionRepository.save(newQuestion);

        List<String> newItems = questionCreateRequest.getItems();
        newItems.forEach(item -> itemRepository.save(
                Item.builder()
                        .text(item)
                        .question(savedQuestion)
                        .build()
        ));

        return savedQuestion.getQuestionId();
    }

    @Transactional(readOnly = true)
    public List<QuestionResponse> findAll() {
        List<Question> questions = questionRepository.findAll();

        return questions.stream()
                .map(QuestionResponse::new)
                .toList();
    }

    @Transactional(readOnly = true)
    public QuestionResponse findById(Long questionId) {
        Question question = questionRepository.findById(questionId)
                .orElseThrow(() -> new NoSuchElementException("찾는 질문이 없습니다."));

        return new QuestionResponse(question);
    }

    @Transactional
    public void deleteById(Long questionId, String email) {
        Member member = memberRepository.findByEmail(email)
                .orElseThrow(() -> new NoSuchElementException("로그인된 이메일은 없는 이메일입니다."));

        Question question = questionRepository.findById(questionId)
                .orElseThrow(() -> new NoSuchElementException("찾는 질문이 없습니다."));

        if (member.getMemberId().equals(question.getMember().getMemberId())) {
            questionRepository.deleteById(questionId);
            return;
        }

        throw new IllegalArgumentException("질문을 작성한 유저와 삭제하려는 유저가 일치하지 않습니다.");
    }

}
