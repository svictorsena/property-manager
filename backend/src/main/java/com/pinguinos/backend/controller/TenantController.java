package com.pinguinos.backend.controller;

import com.pinguinos.backend.dto.CreateTenantRequest;
import com.pinguinos.backend.model.Tenant;
import com.pinguinos.backend.repository.TenantRepository;
import com.pinguinos.backend.repository.UserRepository;
import com.pinguinos.backend.service.TenantService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.security.access.prepost.PreAuthorize;
import org.springframework.security.core.Authentication;
import org.springframework.web.bind.annotation.*;

import java.util.List;
import java.util.Optional;

@RestController
@RequestMapping("/api/tenants")
public class TenantController {

    @Autowired
    private TenantService tenantService;

    @PreAuthorize("hasHole('OWNER'")
    @GetMapping
    public List<Tenant> getAllTenants(Authentication authentication) {
        String ownerUsername = authentication.getName();
        return tenantService.getAllTenantsByOwnerUsername(ownerUsername);
    }

//    @PreAuthorize("hasHole('OWNER'")
    @PostMapping
    public Tenant addTenant(@RequestBody CreateTenantRequest request, Authentication authentication) {
        String ownerUsername = authentication.getName();
        return tenantService.createTenant(request, ownerUsername);
    }
}
