package com.pinguinos.backend.model;

import com.fasterxml.jackson.annotation.JsonBackReference;
import com.fasterxml.jackson.annotation.JsonProperty;
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
    @JsonProperty(access = JsonProperty.Access.WRITE_ONLY)
    @ManyToOne(fetch = FetchType.LAZY)
    @JoinColumn(name = "owner_id")
//    @JsonBackReference

    private Owner owner;

    @OneToMany(mappedBy = "tenant", fetch =  FetchType.LAZY)
    private Set<Contract> contracts = new HashSet<>();
}
