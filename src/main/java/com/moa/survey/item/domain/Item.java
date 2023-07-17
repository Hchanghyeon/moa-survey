package com.moa.survey.item.domain;

import com.moa.survey.question.domain.Question;
import jakarta.persistence.Column;
import jakarta.persistence.Entity;
import jakarta.persistence.GeneratedValue;
import jakarta.persistence.GenerationType;
import jakarta.persistence.Id;
import jakarta.persistence.JoinColumn;
import jakarta.persistence.ManyToOne;
import lombok.AccessLevel;
import lombok.Builder;
import lombok.NoArgsConstructor;

@Entity
@NoArgsConstructor(access = AccessLevel.PROTECTED)
public class Item {

    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    @Column(name = "item_id")
    private Long itemId;

    @Column(nullable = false, length = 100)
    private String text;

    @ManyToOne
    @JoinColumn(name = "question_id")
    private Question question;

    @Builder
    private Item(Long itemId, String text, Question question) {
        this.itemId = itemId;
        this.text = text;
        this.question = question;
    }

}
