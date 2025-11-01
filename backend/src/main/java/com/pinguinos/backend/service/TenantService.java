package com.pinguinos.backend.service;

import com.pinguinos.backend.dto.request.CreateTenantRequest;
import com.pinguinos.backend.dto.response.TenantResponse;
import com.pinguinos.backend.enums.Role;
import com.pinguinos.backend.model.Owner;
import com.pinguinos.backend.model.Tenant;
import com.pinguinos.backend.repository.TenantRepository;
import com.pinguinos.backend.repository.UserRepository;
import com.pinguinos.backend.repository.queryFilter.TenantQueryFilter;
import com.pinguinos.backend.repository.specification.TenantSpecification;
import lombok.RequiredArgsConstructor;
import org.springframework.data.domain.Page;
import org.springframework.data.domain.Pageable;
import org.springframework.security.crypto.password.PasswordEncoder;
import org.springframework.stereotype.Service;

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

    public Page<TenantResponse> getAllTenantsByOwnerUsername(String ownerUsername, String search, Pageable pageable) {
        TenantQueryFilter filter = new TenantQueryFilter();
        filter.setOwnerUsername(ownerUsername);
        filter.setSearch(search);

        return tenantRepository.findAll(filter.toSpecification(), pageable)
                .map(tenant -> new TenantResponse(tenant.getFullName(), tenant.getUsername(), tenant.getTel(), tenant.getContracts()));
    }

    public long getTenantsCount(String ownerUsername) {
        return tenantRepository.count(TenantSpecification.hasOwnerUsername(ownerUsername));
    }



}
