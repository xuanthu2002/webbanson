package com.educative.ecommerce.dto.order;

import com.educative.ecommerce.model.DetailOrder;
import lombok.Data;

import java.io.Serializable;
import java.math.BigInteger;
import java.util.Date;
import java.util.List;

@Data
public class OrderDto implements Serializable {
    private int id;
    private BigInteger totalAmount;
    private Date createTime;
    private List<DetailOrder> detailOrders;

    public OrderDto(int id, BigInteger totalAmount, Date createTime, List<DetailOrder> detailOrders) {
        this.id = id;
        this.totalAmount = totalAmount;
        this.createTime = createTime;
        this.detailOrders = detailOrders;
    }
}
