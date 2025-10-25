package com.pinguinos.backend.model;

import com.fasterxml.jackson.annotation.JsonProperty;
import jakarta.persistence.*;
import lombok.AllArgsConstructor;
import lombok.Getter;
import lombok.NoArgsConstructor;
import lombok.Setter;

import java.util.ArrayList;
import java.util.List;

@Entity
//@Table(name = "owners")
@DiscriminatorValue("OWNER")
@Getter @Setter
@NoArgsConstructor @AllArgsConstructor
public class Owner extends User {
    @JsonProperty(access = JsonProperty.Access.WRITE_ONLY)
    @OneToMany(mappedBy = "owner", fetch = FetchType.LAZY)
    private List<Tenant> tenants = new ArrayList<>();
}
