package com.pinguinos.backend.dto.response;

import java.time.LocalDateTime;

public record InviteTokenResponse (
        String token,
        LocalDateTime expireAt
) {
}
