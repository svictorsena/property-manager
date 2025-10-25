package com.pinguinos.backend.dto;

import com.pinguinos.backend.enums.Role;
import lombok.Builder;

@Builder
public record MeResponse(
          String fullName,
          String username,
          String tel,
          Role role
) {
}
