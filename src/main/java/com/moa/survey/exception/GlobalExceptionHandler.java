package com.moa.survey.exception;

import com.fasterxml.jackson.databind.exc.InvalidFormatException;
import com.moa.survey.exception.dto.ErrorResponse;
import java.util.NoSuchElementException;
import org.springframework.dao.DuplicateKeyException;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.ExceptionHandler;
import org.springframework.web.bind.annotation.RestControllerAdvice;

@RestControllerAdvice
public class GlobalExceptionHandler {

    @ExceptionHandler(InvalidFormatException.class)
    public ResponseEntity<ErrorResponse> handleInvalidFormatException(InvalidFormatException ex) {
        String message = "입력하신 데이터의 형식이 올바르지 않습니다. 올바른 형식으로 입력해주세요.";
        ErrorResponse errorResponse = new ErrorResponse(message, ex.getMessage(), HttpStatus.BAD_REQUEST);
        return ResponseEntity
                .status(HttpStatus.BAD_REQUEST)
                .body(errorResponse);
    }

    @ExceptionHandler(IllegalArgumentException.class)
    public ResponseEntity<ErrorResponse> handleIllegalArgumentException(IllegalArgumentException ex) {
        String message = "잘못된 입력값이 입력되었습니다. 다시 한 번 확인해주세요";
        ErrorResponse errorResponse = new ErrorResponse(message, ex.getMessage(), HttpStatus.BAD_REQUEST);
        return ResponseEntity
                .status(HttpStatus.BAD_REQUEST)
                .body(errorResponse);
    }


    @ExceptionHandler(NoSuchElementException.class)
    public ResponseEntity<ErrorResponse> handleNoSuchElementException(NoSuchElementException ex) {
        String message = "찾는 데이터가 없습니다. 다시 한 번 확인해주세요.";
        ErrorResponse errorResponse = new ErrorResponse(message, ex.getMessage(), HttpStatus.NOT_FOUND);
        return ResponseEntity
                .status(HttpStatus.NOT_FOUND)
                .body(errorResponse);
    }

    @ExceptionHandler(NullPointerException.class)
    public ResponseEntity<ErrorResponse> handleNullPointerException(NullPointerException ex) {
        String message = "서버에서 예기치 않은 오류가 발생했습니다. 관리자에게 문의해주세요.";
        ErrorResponse errorResponse = new ErrorResponse(message, ex.getMessage(), HttpStatus.INTERNAL_SERVER_ERROR);
        return ResponseEntity
                .status(HttpStatus.INTERNAL_SERVER_ERROR)
                .body(errorResponse);
    }

    @ExceptionHandler(DuplicateKeyException.class)
    public ResponseEntity<ErrorResponse> handleDuplicateKeyException(DuplicateKeyException ex) {
        String message = "입력하신 정보는 이미 등록되어있습니다. 다시 한 번 확인하시고 다른 값으로 입력해주세요.";
        ErrorResponse errorResponse = new ErrorResponse(message, ex.getMessage(), HttpStatus.CONFLICT);
        return ResponseEntity
                .status(HttpStatus.CONFLICT)
                .body(errorResponse);
    }

    @ExceptionHandler(Exception.class)
    public ResponseEntity<ErrorResponse> handleException(Exception ex) {
        String message = "서버에서 알 수 없는 에러가 발생했습니다. 관리자에게 문의해주세요.";
        ErrorResponse errorResponse = new ErrorResponse(message, ex.getMessage(), HttpStatus.INTERNAL_SERVER_ERROR);
        return ResponseEntity
                .status(HttpStatus.INTERNAL_SERVER_ERROR)
                .body(errorResponse);
    }

}
