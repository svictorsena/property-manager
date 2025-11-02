package com.pinguinos.backend.dto.request;

import jakarta.validation.constraints.NotBlank;
import jakarta.validation.constraints.Positive;
import jakarta.validation.constraints.Size;

import java.math.BigDecimal;

public record PropertyRequest (
        @Size(min=3, message = "Identifier must have at least 3 characters")
        @NotBlank(message = "Identifier is required")
        String identifier,

        @Size(min=10, message = "Description must have at least 10 characters")
        @NotBlank(message = "Description is required")
        String description,

        @Size(min=7, message = "Address must have at least 7 characters")
        @NotBlank(message = "Address is required")
        String address,

        @Positive(message = "Area is required")
        Double area,

        @Positive(message = "Price is required")
        BigDecimal price
) {
}
