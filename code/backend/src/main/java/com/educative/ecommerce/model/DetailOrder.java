package com.educative.ecommerce.model;

import javax.persistence.*;
import java.io.Serializable;
import java.math.BigInteger;

@Entity(name = "detail_order")
public class DetailOrder implements Serializable {
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Integer id;

    @ManyToOne
    @JoinColumn(name = "order_id")
    private Order order;

    @ManyToOne
    @JoinColumn(name = "product_id")
    private Product product;

    private int quantity;

    private BigInteger totalAmount;
}
