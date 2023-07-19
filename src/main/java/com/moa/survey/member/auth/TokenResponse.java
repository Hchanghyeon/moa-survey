package com.moa.survey.member.auth;

import lombok.Getter;

@Getter
public class TokenResponse {

    private String accessToken;
    private String tokenType;
    private String nickname;

    public TokenResponse(String accessToken, String nickname) {
        this.accessToken = accessToken;
        this.tokenType = "bearer";
        this.nickname = nickname;
    }

}
