package com.pinguinos.backend.dto.request;

import jakarta.validation.constraints.NotBlank;
import jakarta.validation.constraints.Size;

public record CreateTenantRequest(
        @Size(min=8, message = "Full name must have at least 8 characters")
        @NotBlank(message = "Full name is required")
        String fullName,

        @Size(min=3, message = "Username must have at least 3 characters")
        @NotBlank(message = "Username is required")
        String username,

        @Size(min=6, message = "Password must have at least 6 characters")
        @NotBlank(message = "Password is required")
        String password,

        @NotBlank(message = "Tel is required")
        String tel
) {}
