package com.pinguinos.backend.model;

import com.fasterxml.jackson.annotation.JsonProperty;
import jakarta.persistence.Entity;
import jakarta.persistence.FetchType;
import jakarta.persistence.OneToMany;
import jakarta.persistence.Table;
import lombok.AllArgsConstructor;
import lombok.Getter;
import lombok.NoArgsConstructor;
import lombok.Setter;

import java.util.ArrayList;
import java.util.List;

@Entity
//@Table(name = "owners")
@Getter @Setter
@NoArgsConstructor @AllArgsConstructor
public class Owner extends User {
    @JsonProperty(access = JsonProperty.Access.WRITE_ONLY)
    @OneToMany(mappedBy = "owner", fetch = FetchType.LAZY)
    private List<Tenant> tenants = new ArrayList<>();
}
