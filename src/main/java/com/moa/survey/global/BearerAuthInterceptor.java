package com.moa.survey.global;

import com.moa.survey.member.auth.TokenProvider;
import io.micrometer.common.util.StringUtils;
import jakarta.servlet.http.HttpServletRequest;
import jakarta.servlet.http.HttpServletResponse;
import org.springframework.stereotype.Component;
import org.springframework.web.servlet.HandlerInterceptor;

@Component
public class BearerAuthInterceptor implements HandlerInterceptor {

    private AuthorizationExtractor authExtractor;
    private TokenProvider tokenProvider;

    public BearerAuthInterceptor(AuthorizationExtractor authExtractor, TokenProvider tokenProvider) {
        this.authExtractor = authExtractor;
        this.tokenProvider = tokenProvider;
    }

    @Override
    public boolean preHandle(HttpServletRequest request, HttpServletResponse response, Object handler) {
        String token = authExtractor.extract(request, "Bearer");

        if (StringUtils.isEmpty(token)) {
            return true;
        }

        if (!tokenProvider.validateToken(token)) {
            throw new IllegalArgumentException("유효하지 않은 토큰압니다.");
        }

        String email = tokenProvider.getSubject(token);

        request.setAttribute("email", email);

        return true;
    }

}
