package com.educative.ecommerce.dto.order;

import com.educative.ecommerce.model.DetailOrder;
import com.educative.ecommerce.model.Order;
import com.educative.ecommerce.model.PaymentMethod;
import lombok.Data;

import java.io.Serializable;
import java.math.BigInteger;
import java.util.Date;
import java.util.List;

@Data
public class OrderDetailDto implements Serializable {
    private int id;
    private String recipientName;
    private String shippingAddress;
    private String recipientPhoneNumber;
    private BigInteger totalAmount;
    private Date createTime;
    private PaymentMethod paymentMethod;
    private Order.Status status;
    private List<DetailOrder> detailOrders;

    public OrderDetailDto(int id, String recipientName, String shippingAddress, String recipientPhoneNumber, BigInteger totalAmount, Date createTime, PaymentMethod paymentMethod, Order.Status status, List<DetailOrder> detailOrders) {
        this.id = id;
        this.recipientName = recipientName;
        this.shippingAddress = shippingAddress;
        this.recipientPhoneNumber = recipientPhoneNumber;
        this.totalAmount = totalAmount;
        this.createTime = createTime;
        this.paymentMethod = paymentMethod;
        this.status = status;
        this.detailOrders = detailOrders;
    }

    public OrderDetailDto() {
    }
}
