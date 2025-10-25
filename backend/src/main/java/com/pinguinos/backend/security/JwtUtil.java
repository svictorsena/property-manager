package com.pinguinos.backend.security;

import io.jsonwebtoken.Claims;
import io.jsonwebtoken.JwtException;
import io.jsonwebtoken.Jwts;
import io.jsonwebtoken.security.Keys;

import com.pinguinos.backend.model.User;
import jakarta.annotation.PostConstruct;
import org.springframework.beans.factory.annotation.Value;
import org.springframework.stereotype.Component;

import javax.crypto.SecretKey;
import java.util.Date;

@Component
public class JwtUtil {

    @Value("${app.jwt.secret}")
    private String jwtSecretString;

    private SecretKey jwtSecretKey;

    @PostConstruct
    public void init() {
        if (jwtSecretString == null || jwtSecretString.isEmpty()) {
            throw new IllegalStateException("JWT secret não foi configurada!");
        }
        this.jwtSecretKey = Keys.hmacShaKeyFor(jwtSecretString.getBytes());
    }
    public String generateToken(User user) {

        return Jwts.builder()
                .setSubject(user.getUsername())
                .claim("uid", user.getId().toString())
                .claim("role", user.getRole().name())
                .setIssuedAt(new Date())
                .setExpiration(new Date(System.currentTimeMillis() + 1000 * 60 * 60 * 10))
                .signWith(jwtSecretKey)
                .compact();
    }

    public Claims parseAndGetClaims(String token) throws JwtException {
        return Jwts.parserBuilder()
                .setSigningKey(jwtSecretKey)
                .build()
                .parseClaimsJws(token)
                .getBody();
    }

    public boolean validateToken(String token) {
        try {
            parseAndGetClaims(token);
            return true;
        } catch (JwtException e) {
            return false;
        }
    }

}