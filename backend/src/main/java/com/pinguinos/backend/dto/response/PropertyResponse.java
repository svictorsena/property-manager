package com.pinguinos.backend.dto.response;

import com.pinguinos.backend.enums.PropertyStatus;
import com.pinguinos.backend.model.Contract;
import jakarta.persistence.EnumType;
import jakarta.persistence.Enumerated;

import java.math.BigDecimal;
import java.util.Set;

public record PropertyResponse(
        String identifier,
        String description,
        String address,
        Double area,
        @Enumerated(EnumType.STRING)
        PropertyStatus status,
        BigDecimal price,
        Set<Contract> contracts
) {
}
