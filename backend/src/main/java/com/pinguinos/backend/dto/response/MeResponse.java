package com.pinguinos.backend.dto.response;

import com.pinguinos.backend.enums.Role;

public record MeResponse(
          String fullName,
          String username,
          String tel,
          Role role
) {
}
