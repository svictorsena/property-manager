package com.pinguinos.backend.controller;

import com.pinguinos.backend.dto.LoginRequest;
import com.pinguinos.backend.dto.MeResponse;
import com.pinguinos.backend.model.User;
import com.pinguinos.backend.repository.UserRepository;
import com.pinguinos.backend.util.CookieUtil;
import com.pinguinos.backend.util.JwtUtil;
import com.pinguinos.backend.service.AuthService;
import io.jsonwebtoken.Claims;
import jakarta.servlet.http.HttpServletRequest;
import jakarta.servlet.http.HttpServletResponse;
import lombok.RequiredArgsConstructor;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.util.Map;
import java.util.Optional;

@RestController
@RequestMapping("/api/auth")
@RequiredArgsConstructor
public class AuthController {

    private final AuthService authService;
    private final CookieUtil cookieUtil;
    private final JwtUtil jwtUtil;
    private final UserRepository userRepository;

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
        try {
            Claims userClaims = jwtUtil.parseAndGetClaims(cookieUtil.extractTokenFromCookie(request));
            User user = userRepository.findByUsername(userClaims.getSubject())
                    .orElseThrow(() -> new Exception("Usuário ou senha inválidos"));
//            return ResponseEntity.ok(new MeResponse(user.getFullName(), user.getUsername(), user.getTel(), user.getRole()));
            return ResponseEntity.ok(MeResponse
                    .builder()
                    .fullName(user.getFullName())
                    .username(user.getUsername())
                    .tel(user.getTel())
                    .role(user.getRole())
                    .build()
            );
        } catch (Exception e) {
            return ResponseEntity.status(401).build();
        }
    }
}
