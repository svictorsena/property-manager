package com.pinguinos.backend.controller;

import com.pinguinos.backend.dto.response.InviteTokenResponse;
import com.pinguinos.backend.service.InviteTokenService;
import com.pinguinos.backend.service.OwnerService;
import lombok.RequiredArgsConstructor;
import org.springframework.http.ResponseEntity;
import org.springframework.security.access.prepost.PreAuthorize;
import org.springframework.security.core.Authentication;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import java.util.UUID;

@RestController
@RequestMapping("/api/invite-token")
@RequiredArgsConstructor
public class InviteTokenController {

    private final InviteTokenService inviteTokenService;
    private final OwnerService ownerService;

    @PreAuthorize("hasRole('OWNER")
    @PostMapping
    public ResponseEntity<InviteTokenResponse> createInviteToken(Authentication authentication) {
        UUID ownerId = ownerService.getOwnerId(authentication);

        return ResponseEntity.ok(inviteTokenService.createToken(ownerId));
    }

    @PostMapping("/validate")
    public ResponseEntity<Boolean> validateInviteToken(@RequestBody String token) {
        return ResponseEntity.ok(inviteTokenService.validateToken(token));
    }
}
