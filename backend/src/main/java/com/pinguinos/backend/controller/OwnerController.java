package com.pinguinos.backend.controller;

import com.pinguinos.backend.dto.request.CreateTenantRequest;
import com.pinguinos.backend.dto.response.TenantResponse;
import com.pinguinos.backend.model.Tenant;
import com.pinguinos.backend.service.TenantService;
import jakarta.validation.Valid;
import lombok.RequiredArgsConstructor;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.security.access.prepost.PreAuthorize;
import org.springframework.security.core.Authentication;
import org.springframework.web.bind.annotation.*;

import java.util.List;
import java.util.Set;

@RestController
@RequestMapping("/api/owner")
@RequiredArgsConstructor
public class OwnerController {
    private final TenantService tenantService;

    @PreAuthorize("hasRole('OWNER'")
    @GetMapping("/tenants")
    public Set<TenantResponse> getAllTenants(Authentication authentication) {
        String ownerUsername = authentication.getName();
        return tenantService.getAllTenantsByOwnerUsername(ownerUsername);
    }

    @PreAuthorize("hasRole('OWNER'")
    @PostMapping("/register-tenant")
    public ResponseEntity<String> addTenant(@Valid @RequestBody CreateTenantRequest request, Authentication authentication) {
        String ownerUsername = authentication.getName();
        try {
            tenantService.createTenant(request, ownerUsername);
            return ResponseEntity.ok().body("success");
        } catch (Exception e) {
            return ResponseEntity.badRequest().body("error");
        }
    }
}
