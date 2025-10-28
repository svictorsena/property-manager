package com.pinguinos.backend.repository;

import com.pinguinos.backend.enums.InviteTokenStatus;
import com.pinguinos.backend.model.InviteToken;
import org.springframework.data.jpa.repository.JpaRepository;

import java.util.Optional;
import java.util.UUID;

public interface InviteTokenRepository extends JpaRepository<InviteToken, UUID> {
    Optional<InviteToken> findByTokenAndStatus(String token, InviteTokenStatus status);
    Optional<InviteToken> findByToken(String token);
}
