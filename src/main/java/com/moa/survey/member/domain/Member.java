package com.moa.survey.member.domain;

import com.moa.survey.question.domain.Question;
import jakarta.persistence.*;
import lombok.AccessLevel;
import lombok.Builder;
import lombok.Getter;
import lombok.NoArgsConstructor;

import java.util.List;

@Entity
@Getter
@NoArgsConstructor(access = AccessLevel.PROTECTED)
public class Member {

    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    @Column(name = "member_id")
    private Long memberId;

    @Column(nullable = false, length = 50, unique = true)
    private String email;

    @Column(nullable = false, length = 50)
    private String password;

    @Column(nullable = false, length = 15)
    private String nickname;

    @Column(nullable = false, length = 10)
    private String gender;

    @Column(nullable = false, length = 10)
    private int ageGroup;

    @Column(nullable = false, length = 10)
    private String mbti;

    @Column(nullable = false, length = 5)
    private String bloodType;

    @Column(nullable = false, length = 5)
    private String department;

    @Column(nullable = false, length = 10)
    private String job;

    @OneToMany(mappedBy = "member")
    private List<Question> questionList;

    @Builder
    private Member(String email, String password, String nickname, String gender, int ageGroup, String mbti, String bloodType, String department, String job) {
        this.email = email;
        this.password = password;
        this.nickname = nickname;
        this.gender = gender;
        this.ageGroup = ageGroup;
        this.mbti = mbti;
        this.bloodType = bloodType;
        this.department = department;
        this.job = job;
    }

    @Builder
    private Member(Long memberId, String email, String password, String nickname, String gender, int ageGroup, String mbti, String bloodType, String department, String job) {
        this.memberId = memberId;
        this.email = email;
        this.password = password;
        this.nickname = nickname;
        this.gender = gender;
        this.ageGroup = ageGroup;
        this.mbti = mbti;
        this.bloodType = bloodType;
        this.department = department;
        this.job = job;
    }

}
