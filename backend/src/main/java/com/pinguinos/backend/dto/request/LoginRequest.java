package com.pinguinos.backend.dto.request;

import jakarta.validation.constraints.NotBlank;
import jakarta.validation.constraints.Size;

public record LoginRequest(
        @Size(min=3, message = "Username have must at least 3 characters")
        @NotBlank(message = "Username is required")
        String username,

        @Size(min=6, message = "Password have must at least 6 characters")
        @NotBlank(message = "Password is required")
        String password
) {}

