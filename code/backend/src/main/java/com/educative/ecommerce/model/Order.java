package com.educative.ecommerce.model;

import javax.persistence.*;
import javax.validation.constraints.NotNull;
import java.io.Serializable;
import java.math.BigInteger;
import java.util.Date;

@Entity(name = "orders")
public class Order implements Serializable {

    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Integer id;

    @NotNull
    @Column(name = "total_amount")
    private BigInteger totalAmount;

    @NotNull
    @Column(name = "create_time")
    private Date createTime;

    @NotNull
    @ManyToOne
    @JoinColumn(name = "user_id")
    private User user;
}
