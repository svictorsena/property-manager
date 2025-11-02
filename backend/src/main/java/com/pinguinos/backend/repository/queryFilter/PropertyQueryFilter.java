package com.pinguinos.backend.repository.queryFilter;

import com.pinguinos.backend.model.Property;
import com.pinguinos.backend.repository.specification.PropertySpecification;
import lombok.Data;
import org.springframework.data.jpa.domain.Specification;

@Data
public class PropertyQueryFilter {
    private String ownerUsername;
    private String identifier;

    public Specification<Property> toSpecification() {
        return PropertySpecification.hasOwnerUsername(ownerUsername)
                .and(PropertySpecification.filter(identifier));
    }
}