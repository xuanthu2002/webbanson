package com.educative.ecommerce.dto.cart;

import javax.validation.constraints.NotNull;

import lombok.Data;

@Data
public class AddToCartDto {

    private Integer id;
    private @NotNull Integer productId;
    private @NotNull Integer quantity;
}
