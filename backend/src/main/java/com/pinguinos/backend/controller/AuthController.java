package com.pinguinos.backend.controller;

import com.pinguinos.backend.dto.LoginRequest;
import com.pinguinos.backend.security.CookieUtil;
import com.pinguinos.backend.security.JwtUtil;
import com.pinguinos.backend.service.AuthService;
import io.jsonwebtoken.Claims;
import jakarta.servlet.http.HttpServletRequest;
import jakarta.servlet.http.HttpServletResponse;
import lombok.AllArgsConstructor;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.util.Map;

@RestController
@RequestMapping("/api/auth")
@AllArgsConstructor
public class AuthController {

    private AuthService authService;
    private CookieUtil cookieUtil;
    private JwtUtil jwtUtil;

    @PostMapping("/login")
    public ResponseEntity<?> login(@RequestBody LoginRequest request, HttpServletResponse response) {
        try {
            return ResponseEntity.ok(authService.login(request, response));
        } catch (Exception e) {
            return ResponseEntity.status(401).body("Usuário ou senha inválidos4");
        }
    }

    @GetMapping("/me")
    public ResponseEntity<?> getMe(HttpServletRequest request) {
        Claims user = jwtUtil.parseAndGetClaims(cookieUtil.extractTokenFromCookie(request));
        return ResponseEntity.ok(Map.of("me", user));
    }
}
