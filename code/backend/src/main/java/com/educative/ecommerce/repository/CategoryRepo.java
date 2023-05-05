package com.educative.ecommerce.repository;

import com.educative.ecommerce.model.Category;

import java.util.List;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

@Repository
public interface CategoryRepo extends JpaRepository<Category, Integer> {
  List<Category> findAllById(int categoryId);

}
