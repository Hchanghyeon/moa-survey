package com.moa.survey.answer.domain;

import com.moa.survey.item.domain.Item;
import com.moa.survey.member.domain.Member;
import jakarta.persistence.Entity;
import jakarta.persistence.GeneratedValue;
import jakarta.persistence.GenerationType;
import jakarta.persistence.Id;
import jakarta.persistence.JoinColumn;
import jakarta.persistence.ManyToOne;
import lombok.AccessLevel;
import lombok.Builder;
import lombok.Getter;
import lombok.NoArgsConstructor;

@Entity
@Getter
@NoArgsConstructor(access = AccessLevel.PROTECTED)
public class Answer {

    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long answerId;

    @ManyToOne
    @JoinColumn(name = "member_id", nullable = false, unique = true)
    private Member member;

    @ManyToOne
    @JoinColumn(name = "item_id", nullable = false)
    private Item item;

    @Builder
    private Answer(Member member, Item item) {
        this.member = member;
        this.item = item;
    }

    public void changeMember(Member member) {
        this.member = member;
    }

    public void changeItem(Item item) {
        this.item = item;
    }

}
