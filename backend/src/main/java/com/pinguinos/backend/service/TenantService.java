package com.pinguinos.backend.service;

import com.pinguinos.backend.dto.CreateTenantRequest;
import com.pinguinos.backend.enums.Role;
import com.pinguinos.backend.model.Owner;
import com.pinguinos.backend.model.Tenant;
import com.pinguinos.backend.repository.TenantRepository;
import com.pinguinos.backend.repository.UserRepository;
import lombok.RequiredArgsConstructor;
import org.springframework.security.crypto.password.PasswordEncoder;
import org.springframework.stereotype.Service;

import java.util.List;
import java.util.Optional;

@Service
@RequiredArgsConstructor
public class TenantService {

    private final UserRepository userRepository;
    private final TenantRepository tenantRepository;
    private final PasswordEncoder passwordEncoder;

    public Tenant createTenant(CreateTenantRequest request, String ownerUsername) {
        Owner owner = (Owner) userRepository.findByUsername(ownerUsername)
                .orElseThrow(() -> new RuntimeException("Owner não encontrado"));

        Tenant tenant = new Tenant();
        tenant.setFullName(request.fullName());
        tenant.setUsername(request.username());
        tenant.setPassword(passwordEncoder.encode(request.password()));
        tenant.setTel(request.tel());
        tenant.setRole(Role.ROLE_TENANT);
        tenant.setOwner(owner);

        return userRepository.save(tenant);
    }

    public List<Tenant> getAllTenantsByOwnerUsername(String ownerUsername) {
        return tenantRepository.findAllByOwnerUsername(ownerUsername);
    }

    public Optional<Tenant> getTenantByUsername(String username) {
        return tenantRepository.findByUsername(username);
    }

//    public Tenant updateTenant(Tenant tenant) {}

//    public void deleteTenantByUsername(String username) {}
}
