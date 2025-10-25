package com.pinguinos.backend.service;

import com.pinguinos.backend.dto.CreateTenantRequest;
import com.pinguinos.backend.enums.Role;
import com.pinguinos.backend.model.Owner;
import com.pinguinos.backend.model.Tenant;
import com.pinguinos.backend.repository.TenantRepository;
import com.pinguinos.backend.repository.UserRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.security.crypto.password.PasswordEncoder;
import org.springframework.stereotype.Service;

import javax.swing.text.html.Option;
import java.util.List;
import java.util.Optional;

@Service
public class TenantService {

    @Autowired
    private UserRepository userRepository;

    @Autowired
    private TenantRepository tenantRepository;

    @Autowired
    private PasswordEncoder passwordEncoder;

    public Tenant createTenant(CreateTenantRequest request, String ownerUsername) {
        Owner owner = (Owner) userRepository
                .findByUsername(ownerUsername)
                .orElseThrow(() -> new RuntimeException("Owner não encontrado"));

        Tenant tenant = new Tenant();
        tenant.setFullName(request.fullName());
        tenant.setUsername(request.username());
        tenant.setPassword(passwordEncoder.encode(request.password()));
        tenant.setTel(request.tel());
        tenant.setRole(Role.TENANT);
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
