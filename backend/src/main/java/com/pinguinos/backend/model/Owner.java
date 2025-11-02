package com.pinguinos.backend.model;

import com.fasterxml.jackson.annotation.JsonManagedReference;
import com.fasterxml.jackson.annotation.JsonProperty;
import jakarta.persistence.*;
import lombok.AllArgsConstructor;
import lombok.Getter;
import lombok.NoArgsConstructor;
import lombok.Setter;

import java.util.ArrayList;
import java.util.HashSet;
import java.util.List;
import java.util.Set;

@Entity
@DiscriminatorValue("OWNER")
@Getter @Setter
@NoArgsConstructor @AllArgsConstructor
public class Owner extends User {
    @JsonProperty(access = JsonProperty.Access.WRITE_ONLY)
    @OneToMany(mappedBy = "owner", fetch = FetchType.LAZY)
    private List<Tenant> tenants = new ArrayList<>();

    @JsonProperty(access = JsonProperty.Access.WRITE_ONLY)
    @OneToMany(mappedBy = "owner", fetch = FetchType.LAZY)
    private Set<Contract> contracts = new HashSet<>();

    @JsonProperty(access = JsonProperty.Access.WRITE_ONLY)
    @OneToMany(mappedBy = "owner", fetch = FetchType.LAZY)
    private Set<Property> properties = new HashSet<>();
}
