package com.pinguinos.backend.repository.queryFilter;

import com.pinguinos.backend.model.Tenant;
import com.pinguinos.backend.repository.specification.TenantSpecification;
import org.springframework.data.jpa.domain.Specification;
import lombok.Data;

@Data
public class TenantQueryFilter {
    private String ownerUsername;
    private String search;

    public Specification<Tenant> toSpecification() {
        return TenantSpecification.hasOwnerUsername(ownerUsername)
                .and(TenantSpecification.filter(search));
    }
}
