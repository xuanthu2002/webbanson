package com.educative.ecommerce.dto.checkout;

import lombok.Data;

@Data
public class CheckoutItemDto {

    private String productName;
    private int quantity;
    private double price;
    private long productId;
    private int userId;
}
