package com.moa.survey.member.dto.request;

import lombok.Getter;
import lombok.Setter;

@Setter
@Getter
public class MemberLoginRequest {

    private String email;
    private String password;

    public MemberLoginRequest(String email, String password) {
        this.email = email;
        this.password = password;
    }

}
