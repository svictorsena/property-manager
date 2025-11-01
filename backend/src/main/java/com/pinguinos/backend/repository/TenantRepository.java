package com.pinguinos.backend.repository;

import com.pinguinos.backend.model.Tenant;
import org.springframework.data.domain.Page;
import org.springframework.data.domain.Pageable;
import org.springframework.data.jpa.repository.JpaRepository;

import java.util.Optional;
import java.util.UUID;

public interface TenantRepository extends JpaRepository<Tenant, UUID> {
    Optional<Tenant> findByUsername(String username);

    Page<Tenant> findAllByOwnerUsername(String ownerUsername, Pageable pageable);
}
