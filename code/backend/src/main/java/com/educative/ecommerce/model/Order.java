package com.educative.ecommerce.model;

import lombok.Data;

import javax.persistence.*;
import javax.validation.constraints.NotNull;
import java.io.Serializable;
import java.math.BigInteger;
import java.util.ArrayList;
import java.util.Date;
import java.util.List;

@Data
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

    @OneToMany(mappedBy = "order", cascade = CascadeType.ALL)
    private List<DetailOrder> detailOrderList = new ArrayList<>();

    @Column(name = "recipient_name")
    private String recipientName;

    @Column(name = "shipping_address")
    private String shippingAddress;

    @Column(name = "recipient_phone_number")
    private String recipientPhoneNumber;

    @Column(name = "payment_method")
    private PaymentMethod paymentMethod;

    private Status status;

    public static enum Status {
        DONE, PROCESSING
    }
}
