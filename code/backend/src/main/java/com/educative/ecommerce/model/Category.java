package com.educative.ecommerce.model;

import javax.persistence.*;
import javax.validation.constraints.NotBlank;

import lombok.Data;

import java.io.Serializable;
import java.util.ArrayList;
import java.util.HashSet;
import java.util.List;
import java.util.Set;

@Entity
@Table(name = "categories")
@Data
public class Category implements Serializable {

    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Integer id;

    @OneToMany(mappedBy = "category")
    private List<Product> products = new ArrayList<>();

    @Column(name = "category_name")
    private @NotBlank String categoryName;

    private @NotBlank String description;

    @Column(name = "image_url")
    private @NotBlank String imageUrl;
}
