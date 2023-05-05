package com.educative.ecommerce.dto;

import javax.validation.constraints.NotNull;

import lombok.Data;

@Data
public class ProductDto {
    private Integer id;
    private @NotNull String name;
    private @NotNull String imageURL;
    private @NotNull double price;
    private @NotNull String description;
    private @NotNull Integer categoryId;
}
