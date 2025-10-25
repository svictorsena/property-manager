package com.pinguinos.backend.controller;

import com.pinguinos.backend.dto.LoginRequest;
import com.pinguinos.backend.security.CookieUtil;
import com.pinguinos.backend.security.JwtUtil;
import com.pinguinos.backend.service.AuthService;
import io.jsonwebtoken.Claims;
import jakarta.servlet.http.HttpServletRequest;
import jakarta.servlet.http.HttpServletResponse;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.security.core.Authentication;
import org.springframework.web.bind.annotation.*;

import java.util.Map;

@RestController
@RequestMapping("/api/auth")
public class AuthController {

    @Autowired
    private AuthService authService;

    @Autowired
    private CookieUtil cookieUtil;

    @Autowired
    private JwtUtil jwtUtil;

    @PostMapping("/login")
    public ResponseEntity<?> login(@RequestBody LoginRequest request, HttpServletResponse response) {
        try {
            authService.login(request, response);
            return ResponseEntity.ok(Map.of("message", "Login realizado com sucesso"));
        } catch (Exception e) {
            return ResponseEntity.status(401).body("Usuário ou senha inválidos");
        }
    }

    @GetMapping("/me")
    public ResponseEntity<?> getMe(HttpServletRequest request) {
        Claims user = jwtUtil.parseAndGetClaims(cookieUtil.extractTokenFromCookie(request));
        return ResponseEntity.ok(Map.of("me", user));
    }
}
