package com.educative.ecommerce.dto.cart;

import java.util.List;

import lombok.Data;

@Data
public class CartDto {
    private List<CartItemDto> cartItems;
    private double totalCost;
}
