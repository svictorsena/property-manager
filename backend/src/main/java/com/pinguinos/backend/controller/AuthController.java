package com.pinguinos.backend.controller;

import com.pinguinos.backend.dto.request.CreateTenantRequest;
import com.pinguinos.backend.dto.request.LoginRequest;
import com.pinguinos.backend.dto.request.RegisterRequest;
import com.pinguinos.backend.dto.response.MeResponse;
import com.pinguinos.backend.model.InviteToken;
import com.pinguinos.backend.model.Tenant;
import com.pinguinos.backend.model.User;
import com.pinguinos.backend.repository.UserRepository;
import com.pinguinos.backend.service.InviteTokenService;
import com.pinguinos.backend.util.CookieUtil;
import com.pinguinos.backend.util.JwtUtil;
import com.pinguinos.backend.service.AuthService;
import io.jsonwebtoken.Claims;
import jakarta.servlet.http.HttpServletRequest;
import jakarta.servlet.http.HttpServletResponse;
import jakarta.validation.Valid;
import lombok.RequiredArgsConstructor;
import org.springframework.http.ResponseEntity;
import org.springframework.security.authentication.AuthenticationManager;
import org.springframework.security.authentication.UsernamePasswordAuthenticationToken;
import org.springframework.security.core.Authentication;
import org.springframework.security.core.context.SecurityContextHolder;
import org.springframework.web.bind.annotation.*;

import java.time.LocalDateTime;

@RestController
@RequestMapping("/api/auth")
@RequiredArgsConstructor
public class AuthController {

    private final AuthService authService;
    private final CookieUtil cookieUtil;
    private final JwtUtil jwtUtil;
    private final UserRepository userRepository;
    private final AuthenticationManager authenticationManager;
    private final InviteTokenService inviteTokenService;

    @PostMapping("/login")
    public ResponseEntity<?> login(@Valid @RequestBody LoginRequest request, HttpServletResponse response) {
        try {
            UsernamePasswordAuthenticationToken usernamePasswordAuthenticationToken = new UsernamePasswordAuthenticationToken(request.username(), request.password());
            Authentication authentication = authenticationManager.authenticate(usernamePasswordAuthenticationToken);
            SecurityContextHolder.getContext().setAuthentication(authentication);

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
            return ResponseEntity.ok(new MeResponse(user.getFullName(), user.getUsername(), user.getTel(), user.getRole()));
        } catch (Exception e) {
            return ResponseEntity.status(401).build();
        }
    }

    @PostMapping("/register")
    public ResponseEntity<?> register(@Valid @RequestBody RegisterRequest request) {
        try {
            CreateTenantRequest tenantRequest = new CreateTenantRequest(request.fullName(), request.username(), request.tel(), request.password());
            InviteToken inviteToken = inviteTokenService.findByToken(request.token()).orElse(null);
            if (inviteToken != null) {
                Tenant tenant = authService.register(tenantRequest, request.token());
                inviteToken.setUsedAt(LocalDateTime.now());
                inviteToken.setUsedByTenantId(tenant.getId());
                inviteTokenService.updateInviteToken(inviteToken);
                return ResponseEntity.ok(tenant);
            }
            return ResponseEntity.status(401).build();

        } catch (Exception e) {
            return ResponseEntity.status(401).build();
        }
    }
}
