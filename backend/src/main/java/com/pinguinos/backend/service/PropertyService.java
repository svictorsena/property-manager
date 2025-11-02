package com.pinguinos.backend.service;

import com.pinguinos.backend.dto.request.PropertyRequest;
import com.pinguinos.backend.dto.response.PropertyResponse;
import com.pinguinos.backend.model.Owner;
import com.pinguinos.backend.model.Property;
import com.pinguinos.backend.repository.OwnerRepository;
import com.pinguinos.backend.repository.PropertyRepository;
import com.pinguinos.backend.repository.queryFilter.PropertyQueryFilter;
import com.pinguinos.backend.repository.specification.PropertySpecification;
import lombok.RequiredArgsConstructor;
import org.springframework.data.domain.Page;
import org.springframework.data.domain.Pageable;
import org.springframework.stereotype.Service;

@Service
@RequiredArgsConstructor
public class PropertyService {

    private final PropertyRepository propertyRepository;
    private final OwnerRepository ownerRepository;

    public Page<PropertyResponse> getAllPropertiesByOwnerUsername(String identifier, String ownerUsername, Pageable pageable) {
        PropertyQueryFilter filter = new PropertyQueryFilter();
        filter.setOwnerUsername(ownerUsername);
        filter.setIdentifier(identifier);

        return propertyRepository.findAll(filter.toSpecification(), pageable)
                .map(
                property -> new PropertyResponse(property.getIdentifier(), property.getDescription(), property.getAddress(), property.getArea(), property.getStatus(), property.getPrice(), property.getContracts())
        );
    }

    public long getPropertiesCount(String ownerUsername) {
        return propertyRepository.count(PropertySpecification.hasOwnerUsername(ownerUsername));
    }

    public Property createProperty(PropertyRequest request, String ownerUsername) {
        Owner owner = ownerRepository.findByUsername(ownerUsername)
                .orElseThrow(() -> new RuntimeException("Owner não encontrado"));

        Property property = new Property();
        property.setIdentifier(request.identifier());
        property.setAddress(request.address());
        property.setArea(request.area());
        property.setPrice(request.price());
        property.setDescription(request.description());
        property.setOwner(owner);

        return propertyRepository.save(property);
    }

}
