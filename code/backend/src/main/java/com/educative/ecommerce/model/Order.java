package com.educative.ecommerce.model;

import javax.persistence.Entity;
import javax.persistence.Id;
import java.io.Serializable;

@Entity(name = "orders")
public class Order implements Serializable {
    private @Id Integer id;

}
