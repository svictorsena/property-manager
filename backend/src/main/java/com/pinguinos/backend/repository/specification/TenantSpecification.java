package com.pinguinos.backend.repository.specification;

import com.pinguinos.backend.model.Tenant;
import org.springframework.data.jpa.domain.Specification;

public class TenantSpecification {
    public static Specification<Tenant> filter(
            String search
    ) {
        return (root, query, cb) -> {
            if (search == null || search.isBlank()) {
                return cb.conjunction();
            }

            String likeSearch = "%" + search.toLowerCase() + "%";

            return cb.or(
                    cb.like(cb.lower(root.get("fullName")), likeSearch),
                    cb.like(cb.lower(root.get("username")), likeSearch),
                    cb.like(root.get("tel"), likeSearch)
            );
        };
    }

    public static Specification<Tenant> hasOwnerUsername(String ownerUsername) {
        return (root, query, cb) -> cb.equal(root.get("owner").get("username"), ownerUsername);
    }
}
