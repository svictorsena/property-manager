package com.pinguinos.backend.controller;

import com.pinguinos.backend.dto.CreateTenantRequest;
import com.pinguinos.backend.model.Tenant;
import com.pinguinos.backend.service.TenantService;
import lombok.RequiredArgsConstructor;
import org.springframework.security.access.prepost.PreAuthorize;
import org.springframework.security.core.Authentication;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@RestController
@RequestMapping("/api/owner")
@RequiredArgsConstructor
public class OwnerController {
    private final TenantService tenantService;

    @PreAuthorize("hasHole('OWNER'")
    @GetMapping("/tenants")
    public List<Tenant> getAllTenants(Authentication authentication) {
        String ownerUsername = authentication.getName();
        return tenantService.getAllTenantsByOwnerUsername(ownerUsername);
    }

    @PreAuthorize("hasHole('OWNER'")
    @PostMapping("/register-tenant")
    public Tenant addTenant(@RequestBody CreateTenantRequest request, Authentication authentication) {
        String ownerUsername = authentication.getName();
        return tenantService.createTenant(request, ownerUsername);
    }
}
