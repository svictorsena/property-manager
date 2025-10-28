package com.pinguinos.backend.dto.request;

import jakarta.validation.constraints.NotBlank;
import jakarta.validation.constraints.Size;

public record RegisterRequest (
        @Size(min=8, message = "Full name have must at least 8 characters")
        @NotBlank(message = "Full name is required")
        String fullName,

        @Size(min=3, message = "Username have must at least 3 characters")
        @NotBlank(message = "Username is required")
        String username,

        @Size(min=6, message = "Password have must at least 6 characters")
        @NotBlank(message = "Password is required")
        String password,

        @NotBlank(message = "Tel is required")
        String tel,

        @NotBlank(message = "Token is required")
        String token
) { }
