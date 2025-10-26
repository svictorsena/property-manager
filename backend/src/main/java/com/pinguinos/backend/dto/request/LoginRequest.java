package com.pinguinos.backend.dto;

public record LoginRequest(
        String username,
        String password
) {}
