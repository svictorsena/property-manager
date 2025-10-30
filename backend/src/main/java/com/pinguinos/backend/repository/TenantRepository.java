package com.pinguinos.backend.repository;

import com.pinguinos.backend.model.Tenant;
import org.springframework.data.jpa.repository.JpaRepository;

import java.util.List;
import java.util.Optional;
import java.util.Set;
import java.util.UUID;

public interface TenantRepository extends JpaRepository<Tenant, UUID> {
    Optional<Tenant> findByUsername(String username);

    Set<Tenant> findAllByOwnerUsername(String ownerUsername);
}
