package com.pinguinos.backend.model;

import com.pinguinos.backend.enums.PropertyStatus;
import jakarta.persistence.*;
import lombok.*;

import java.math.BigDecimal;
import java.util.HashSet;
import java.util.Set;
import java.util.UUID;

@Entity
@Table(name = "properties")
@Getter @Setter
@NoArgsConstructor @AllArgsConstructor
public class Property {

    @Id
    @GeneratedValue(strategy = GenerationType.UUID)
    private UUID id;

    @Column(nullable = false, unique = true)
    private String identifier;

    @Column(nullable = false)
    private String description;

    @Column(nullable = false)
    private String address;

    @Column(nullable = false)
    private Double area;

    @Column(nullable = false)
    @Enumerated(EnumType.STRING)
    private PropertyStatus status;

    @Column(nullable = false)
    private BigDecimal price;

    @OneToMany(mappedBy = "property", fetch = FetchType.LAZY)
    private Set<Contract> contracts = new HashSet<>();

    @OneToMany(mappedBy = "property", fetch = FetchType.LAZY)
    private Set<Maintenance> maintenances = new HashSet<>();

    @ManyToOne(fetch = FetchType.LAZY)
    @JoinColumn(name = "owner_id", nullable = false)
    private Owner owner;

    @PrePersist
    public void prePersist() {
        if (this.status == null) {
            this.status = PropertyStatus.AVAILABLE;
        }
    }
}
