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

        Question newQuestion = new Question(questionCreateRequest.getTitle(), member);
        Question savedQuestion = questionRepository.save(newQuestion);

        List<String> newItems = questionCreateRequest.getItems();
        newItems.forEach(item -> itemRepository.save(new Item(item, savedQuestion)));

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

}
