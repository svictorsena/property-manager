package com.pinguinos.backend.service;

import com.pinguinos.backend.dto.request.CreateTenantRequest;
import com.pinguinos.backend.dto.request.LoginRequest;
import com.pinguinos.backend.dto.response.LoginResponse;
import com.pinguinos.backend.model.Owner;
import com.pinguinos.backend.model.Tenant;
import com.pinguinos.backend.model.User;
import com.pinguinos.backend.repository.UserRepository;
import com.pinguinos.backend.util.CookieUtil;
import com.pinguinos.backend.util.JwtUtil;
import jakarta.servlet.http.HttpServletResponse;
import lombok.RequiredArgsConstructor;
import org.springframework.security.crypto.password.PasswordEncoder;
import org.springframework.stereotype.Service;

import java.util.UUID;

@Service
@RequiredArgsConstructor
public class AuthService {

    private final CookieUtil cookieUtil;
    private final JwtUtil jwtUtil;
    private final UserRepository userRepository;
    private final PasswordEncoder passwordEncoder;
    private final InviteTokenService inviteTokenService;
    private final TenantService tenantService;

    public LoginResponse login(LoginRequest request, HttpServletResponse response) throws Exception {
        try {
            User user = userRepository.findByUsername(request.username())
                    .orElseThrow(() -> new Exception("Usuário ou senha inválidos"));

            if (!passwordEncoder.matches(request.password(), user.getPassword())) {
                throw new Exception("Usuário ou senha inválidos");
            }

            String token = jwtUtil.generateToken(user);

            cookieUtil.createCookie(token, response);

            return new LoginResponse(user.getUsername(), user.getRole());

        } catch (Exception e) {
            throw new RuntimeException("Usuário ou senha inválidos");
        }
    }

    public Tenant register(CreateTenantRequest request, String token) {
        Owner owner = (Owner) userRepository
                .findById(inviteTokenService.getOwnerId(token))
                .orElseThrow(() -> new RuntimeException("Owner não encontrado"));

        return tenantService.createTenant(request, owner.getUsername());
    }
}
