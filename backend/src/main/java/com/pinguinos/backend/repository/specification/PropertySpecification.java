package com.pinguinos.backend.repository.specification;

import com.pinguinos.backend.model.Property;
import org.springframework.data.jpa.domain.Specification;

public class PropertySpecification {
    public static Specification<Property> filter(
            String identifier
    ) {
        return (root, query, cb) -> {
            if (identifier == null || identifier.isBlank()) {
                return cb.conjunction();
            }

            String likeSearch = "%" + identifier.toLowerCase() + "%";

            return cb.like(cb.lower(root.get("identifier")), likeSearch);

        };
    }

    public static Specification<Property> hasOwnerUsername(String ownerUsername) {
        return (root, query, cb) -> cb.equal(root.get("owner").get("username"), ownerUsername);
    }
}
