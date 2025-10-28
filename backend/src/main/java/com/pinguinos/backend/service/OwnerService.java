package com.pinguinos.backend.service;

import com.pinguinos.backend.model.Owner;
import com.pinguinos.backend.repository.UserRepository;
import lombok.RequiredArgsConstructor;
import org.springframework.security.core.Authentication;
import org.springframework.stereotype.Service;

import java.util.UUID;

@Service
@RequiredArgsConstructor
public class OwnerService {

    private final UserRepository userRepository;

    public UUID getOwnerId(Authentication authentication) {
        Owner owner = (Owner) userRepository.findByUsername(authentication.getName())
                .orElseThrow(() -> new RuntimeException("Owner não encontrado"));
        return owner.getId();
    }
}
