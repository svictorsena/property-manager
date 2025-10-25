package com.pinguinos.backend.dto;

public record CreateTenantRequest(
        String fullName,
        String username,
        String password,
        String tel
) {}
