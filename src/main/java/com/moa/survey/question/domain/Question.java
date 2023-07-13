package com.moa.survey.question.domain;

import com.moa.survey.answer.domain.Answer;
import com.moa.survey.member.domain.Member;
import jakarta.persistence.Column;
import jakarta.persistence.Entity;
import jakarta.persistence.GeneratedValue;
import jakarta.persistence.GenerationType;
import jakarta.persistence.Id;
import jakarta.persistence.JoinColumn;
import jakarta.persistence.ManyToOne;
import jakarta.persistence.OneToMany;
import java.util.List;
import lombok.Builder;

@Entity
public class Question {

    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    @Column(name = "question_id")
    private Long questionId;

    @Column(nullable = false, length = 100)
    private String title;

    @OneToMany(mappedBy = "question")
    private List<Answer> answerList;

    @ManyToOne
    @JoinColumn(name = "member_id")
    private Member member;

    @Builder
    public Question(Long questionId, String title, List<Answer> answerList, Member member) {
        this.questionId = questionId;
        this.title = title;
        this.answerList = answerList;
        this.member = member;
    }
    
}
