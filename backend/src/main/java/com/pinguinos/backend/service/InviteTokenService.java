package com.pinguinos.backend.service;

import com.pinguinos.backend.dto.response.InviteTokenResponse;
import com.pinguinos.backend.enums.InviteTokenStatus;
import com.pinguinos.backend.model.InviteToken;
import com.pinguinos.backend.repository.InviteTokenRepository;
import jakarta.transaction.Transactional;
import lombok.RequiredArgsConstructor;
import org.springframework.stereotype.Service;

import java.time.LocalDateTime;
import java.util.Optional;
import java.util.UUID;

@Service
@RequiredArgsConstructor
public class InviteTokenService {

    private final InviteTokenRepository inviteTokenRepository;

    @Transactional
    public InviteTokenResponse createToken(UUID ownerId) {
        String token = UUID.randomUUID().toString();

        InviteToken inviteToken = new InviteToken();
        inviteToken.setToken(token);
        inviteToken.setOwnerId(ownerId);
        inviteToken.setStatus(InviteTokenStatus.PENDING);
        inviteToken.setExpireAt(LocalDateTime.now().plusMinutes(1));
        inviteTokenRepository.save(inviteToken);

        return new InviteTokenResponse(token, inviteToken.getExpireAt());
    }

    @Transactional
    public boolean validateToken(String token) {
        InviteToken inviteToken = inviteTokenRepository
                .findByTokenAndStatus(token, InviteTokenStatus.PENDING)
                .orElse(null);

        if (inviteToken == null) return false;

        if (LocalDateTime.now().isAfter(inviteToken.getExpireAt())) {
            inviteToken.setStatus(InviteTokenStatus.EXPIRED);
            inviteTokenRepository.save(inviteToken);
        }

        return true;
    }

    public UUID getOwnerId(String token) {
        Optional<InviteToken> inviteToken = inviteTokenRepository.findByToken(token);
        return inviteToken.map(InviteToken::getOwnerId).orElse(null);
    }

    public Optional<InviteToken> findByToken(String token) {
        return inviteTokenRepository.findByToken(token);
    }

    public InviteToken updateInviteToken(InviteToken inviteToken) {
        return inviteTokenRepository.save(inviteToken);
    }

}
