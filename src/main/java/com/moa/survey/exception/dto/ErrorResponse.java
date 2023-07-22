package com.moa.survey.exception.dto;

import lombok.Getter;
import lombok.Setter;
import org.springframework.http.HttpStatus;

@Getter
@Setter
public class ErrorResponse {

    private final String message;
    private final String detailMessage;
    private final HttpStatus code;

    public ErrorResponse(String message, String detailMessage, HttpStatus code) {
        this.message = message;
        this.detailMessage = detailMessage;
        this.code = code;
    }
}
