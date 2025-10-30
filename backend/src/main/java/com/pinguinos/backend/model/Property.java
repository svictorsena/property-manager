package com.pinguinos.backend.model;

import com.pinguinos.backend.enums.PropertyStatus;
import com.pinguinos.backend.enums.PropertyType;
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

    @Column(nullable = false)
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

    @Column(nullable = false)
    @Enumerated(EnumType.STRING)
    private PropertyType type;

    @OneToMany(mappedBy = "property", fetch = FetchType.LAZY)
    private Set<Contract> contracts = new HashSet<>();

    @OneToMany(mappedBy = "property", fetch = FetchType.LAZY)
    private Set<Maintenance> maintenances = new HashSet<>();
}
