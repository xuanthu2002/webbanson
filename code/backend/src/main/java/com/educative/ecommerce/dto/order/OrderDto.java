package com.educative.ecommerce.dto.order;

import com.educative.ecommerce.model.PaymentMethod;
import com.educative.ecommerce.model.User;
import lombok.Data;

@Data
public class OrderDto {
    private User user;
    private String recipientName;
    private String shippingAddress;
    private String recipientPhoneNumber;
    private PaymentMethod paymentMethod;
}
