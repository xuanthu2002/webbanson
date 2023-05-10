package com.educative.ecommerce.model;

import com.fasterxml.jackson.annotation.JsonIgnore;
import lombok.*;

import javax.persistence.*;
import java.io.Serializable;
import java.math.BigInteger;

@Data
@NoArgsConstructor
@AllArgsConstructor
@Getter
@Setter
@Entity(name = "detail_order")
public class DetailOrder implements Serializable {
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Integer id;

    @JsonIgnore
    @ManyToOne
    @JoinColumn(name = "order_id")
    private Order order;

    @ManyToOne
    @JoinColumn(name = "product_id")
    private Product product;

    private int quantity;

    @Column(name = "total_amount")
    private BigInteger totalAmount;
}
