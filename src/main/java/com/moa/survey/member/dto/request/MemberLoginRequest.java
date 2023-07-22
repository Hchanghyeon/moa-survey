package com.moa.survey.member.dto.request;

import jakarta.validation.constraints.Email;
import jakarta.validation.constraints.NotBlank;
import jakarta.validation.constraints.Size;
import lombok.Getter;

@Getter
public class MemberLoginRequest {

    @Email(message = "이메일 양식에 맞춰서 입력해주세요.")
    @NotBlank(message = "입력값이 없거나, '', ' '일 수 없습니다.")
    private String email;

    @NotBlank(message = "입력값이 없거나, '', ' '일 수 없습니다.")
    @Size(min = 1, max = 100)
    private String password;

    public MemberLoginRequest(String email, String password) {
        this.email = email;
        this.password = password;
    }

}
