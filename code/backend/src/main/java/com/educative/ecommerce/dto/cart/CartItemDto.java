package com.educative.ecommerce.dto.cart;

import com.educative.ecommerce.model.Cart;
import com.educative.ecommerce.model.Product;

import lombok.Data;

@Data
public class CartItemDto {
    private Integer id;
    private Integer quantity;
    private Product product;

    public CartItemDto(Cart cart) {
        this.id = cart.getId();
        this.quantity = cart.getQuantity();
        this.setProduct(cart.getProduct());
    }
}
