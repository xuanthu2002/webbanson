package com.educative.ecommerce.repository;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

import com.educative.ecommerce.model.Product;

@Repository
public interface ProductRepository extends JpaRepository<Product, Integer> {
  Product getProductById(int productId);

  // @Query(value = "SELECT * FROM `products` inner join categories on
  // products.category_id=categories.id", nativeQuery = true)
  // List<Product> findAllProducts();
}
