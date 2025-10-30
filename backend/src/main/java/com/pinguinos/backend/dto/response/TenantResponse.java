package com.pinguinos.backend.dto.response;

import com.pinguinos.backend.model.Contract;

import java.util.Set;

public record TenantResponse(
        String fullName,
        String username,
        String tel,
        Set<Contract> contracts
) {
}
