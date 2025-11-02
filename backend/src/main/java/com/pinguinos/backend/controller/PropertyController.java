package com.pinguinos.backend.controller;

import com.pinguinos.backend.dto.request.PropertyRequest;
import com.pinguinos.backend.dto.response.PropertyResponse;
import com.pinguinos.backend.model.Property;
import com.pinguinos.backend.service.PropertyService;
import jakarta.validation.Valid;
import lombok.RequiredArgsConstructor;
import org.springframework.data.domain.Pageable;
import org.springframework.data.web.PageableDefault;
import org.springframework.http.ResponseEntity;
import org.springframework.security.core.Authentication;
import org.springframework.data.domain.Page;
import org.springframework.web.bind.annotation.*;

import java.util.Map;

@RestController
@RequestMapping("/api/property")
@RequiredArgsConstructor
public class PropertyController {
    private final PropertyService propertyService;

    @GetMapping
    public Page<PropertyResponse> getAllProperties(Authentication authentication, @RequestParam(required = false) String identifier, @PageableDefault(size = 6) Pageable pageable) {
        String ownerUsername = authentication.getName();
        return propertyService.getAllPropertiesByOwnerUsername(identifier, ownerUsername, pageable);
    }

    @GetMapping("/total")
    public ResponseEntity<Map<String, Long>> getTotalProperties(Authentication authentication) {
        String ownerUsername = authentication.getName();
        return ResponseEntity.ok(Map.of("totalProperties", propertyService.getPropertiesCount(ownerUsername)));
    }

    @PostMapping
    public ResponseEntity<Property> addProperty(@Valid @RequestBody PropertyRequest request, Authentication authentication) {
        String ownerUsername = authentication.getName();
        return ResponseEntity.ok(propertyService.createProperty(request, ownerUsername));
    }

}
