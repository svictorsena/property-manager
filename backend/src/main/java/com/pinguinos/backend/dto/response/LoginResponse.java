package com.pinguinos.backend.dto.response;

import com.pinguinos.backend.enums.Role;

public record LoginResponse(
        String username,
        Role role
) {}
