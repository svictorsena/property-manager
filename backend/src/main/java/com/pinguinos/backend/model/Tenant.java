package com.pinguinos.backend.model;

import jakarta.persistence.*;
import lombok.AllArgsConstructor;
import lombok.Getter;
import lombok.NoArgsConstructor;
import lombok.Setter;

import java.util.HashSet;
import java.util.Set;

@Entity

@DiscriminatorValue("TENANT")
@Getter @Setter
@NoArgsConstructor @AllArgsConstructor
public class Tenant extends User {
    @ManyToOne(fetch = FetchType.LAZY)
    @JoinColumn(name = "owner_id")
    private Owner owner;

    @OneToMany(mappedBy = "tenant", fetch =  FetchType.LAZY)
    private Set<Contract> contracts = new HashSet<>();
}
