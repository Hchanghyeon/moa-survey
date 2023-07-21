package com.moa.survey.question.domain;

import com.moa.survey.item.domain.Item;
import com.moa.survey.member.domain.Member;
import jakarta.persistence.Column;
import jakarta.persistence.Entity;
import jakarta.persistence.FetchType;
import jakarta.persistence.GeneratedValue;
import jakarta.persistence.GenerationType;
import jakarta.persistence.Id;
import jakarta.persistence.JoinColumn;
import jakarta.persistence.ManyToOne;
import jakarta.persistence.OneToMany;
import java.util.List;
import lombok.AccessLevel;
import lombok.Builder;
import lombok.Getter;
import lombok.NoArgsConstructor;

@Entity
@Getter
@NoArgsConstructor(access = AccessLevel.PROTECTED)
public class Question {

    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    @Column(name = "question_id")
    private Long questionId;

    @Column(nullable = false, length = 100)
    private String title;

    @OneToMany(mappedBy = "question")
    private List<Item> items;

    @ManyToOne(fetch = FetchType.LAZY)
    @JoinColumn(name = "member_id")
    private Member member;

    @Builder
    private Question(Long questionId, String title, List<Item> items, Member member) {
        this.questionId = questionId;
        this.title = title;
        this.items = items;
        this.member = member;
    }

    public Question(String title, Member member) {
        this.title = title;
        this.member = member;
    }
    
}
