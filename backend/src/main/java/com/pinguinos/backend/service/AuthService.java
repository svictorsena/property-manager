package com.pinguinos.backend.service;

import com.pinguinos.backend.dto.LoginRequest;
import com.pinguinos.backend.model.Tenant;
import com.pinguinos.backend.model.User;
import com.pinguinos.backend.repository.UserRepository;
import com.pinguinos.backend.security.CookieUtil;
import com.pinguinos.backend.security.JwtUtil;
import jakarta.servlet.http.HttpServletResponse;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.security.crypto.password.PasswordEncoder;
import org.springframework.stereotype.Service;

@Service
public class AuthService {

    @Autowired
    private CookieUtil cookieUtil;

    @Autowired
    private JwtUtil jwtUtil;

    @Autowired
    private TenantService tenantService;

    @Autowired
    private UserRepository userRepository;

    @Autowired
    private PasswordEncoder passwordEncoder;

    public void login(LoginRequest request, HttpServletResponse response) throws Exception {
        try {
            User user = userRepository.findByUsername(request.username())
                    .orElseThrow(() -> new Exception("Usuário ou senha inválidos"));

            if (!passwordEncoder.matches(request.password(), user.getPassword())) {
                throw new Exception("Usuário ou senha inválidos");
            }

            String token = jwtUtil.generateToken(user);

            cookieUtil.createCookie(token, response);
        } catch (Exception e) {
            throw new RuntimeException("Usuário ou senha inválidos");
        }
    }
}
