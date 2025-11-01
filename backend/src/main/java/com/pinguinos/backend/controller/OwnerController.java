package com.pinguinos.backend.controller;

import com.pinguinos.backend.dto.request.CreateTenantRequest;
import com.pinguinos.backend.dto.response.TenantResponse;
import com.pinguinos.backend.model.Tenant;
import com.pinguinos.backend.service.TenantService;
import jakarta.validation.Valid;
import lombok.RequiredArgsConstructor;
import org.springframework.data.domain.Page;
import org.springframework.data.domain.Pageable;
import org.springframework.data.web.PageableDefault;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.security.access.prepost.PreAuthorize;
import org.springframework.security.core.Authentication;
import org.springframework.web.bind.annotation.*;

import java.util.List;
import java.util.Map;
import java.util.Set;

@RestController
@RequestMapping("/api/owner")
@RequiredArgsConstructor
public class OwnerController {
    private final TenantService tenantService;

    @PreAuthorize("hasRole('OWNER')")
    @GetMapping("/tenants")
    public Page<TenantResponse> getAllTenants(Authentication authentication, @RequestParam(required = false) String search,  @PageableDefault(size = 6) Pageable pageable) {
        String ownerUsername = authentication.getName();
        return tenantService.getAllTenantsByOwnerUsername(ownerUsername, search, pageable);
    }

    @GetMapping("/tenants/total")
    public ResponseEntity<Map<String, Long>> getTotalTenants(Authentication authentication) {
        String ownerUsername = authentication.getName();
        return ResponseEntity.ok(Map.of("totalTenants", tenantService.getTenantsCount(ownerUsername)));
    }

    @PreAuthorize("hasRole('OWNER')")
    @PostMapping("/register-tenant")
    public ResponseEntity<Map<String, String>> addTenant(@Valid @RequestBody CreateTenantRequest request, Authentication authentication) {
        String ownerUsername = authentication.getName();
        try {
            tenantService.createTenant(request, ownerUsername);
            return ResponseEntity.ok(Map.of("message", "Tenant created successfully!"));
        } catch (Exception e) {
            return ResponseEntity.badRequest().body(Map.of("error", "Error while creating tenant."));
        }
    }
}
