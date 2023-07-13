package com.moa.survey.answer.domain;

import com.moa.survey.question.domain.Question;
import jakarta.persistence.Column;
import jakarta.persistence.Entity;
import jakarta.persistence.GeneratedValue;
import jakarta.persistence.GenerationType;
import jakarta.persistence.Id;
import jakarta.persistence.JoinColumn;
import jakarta.persistence.ManyToOne;

@Entity
public class Answer {

    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    @Column(name = "answer_id")
    private Long answerId;

    @Column(nullable = false, length = 100)
    private String text;

    @ManyToOne
    @JoinColumn(name = "question_id")
    private Question question;

    public Answer(Long answerId, String text, Question question) {
        this.answerId = answerId;
        this.text = text;
        this.question = question;
    }
    
}
