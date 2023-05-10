package com.educative.ecommerce.repository;

import com.educative.ecommerce.model.DetailOrder;
import org.springframework.data.jpa.repository.JpaRepository;

public interface DetailOrderRepository extends JpaRepository<DetailOrder, Integer> {
}
