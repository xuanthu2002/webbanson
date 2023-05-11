package com.educative.ecommerce.repository;

import com.educative.ecommerce.model.Order;
import com.educative.ecommerce.model.User;
import org.springframework.data.jpa.repository.JpaRepository;

public interface OrderRepository extends JpaRepository<Order, Integer> {
    Iterable<Order> getOrdersByUserOrderByCreateTimeDesc(User user);
    Iterable<Order> findAllByOrderByCreateTimeDesc();
    Iterable<Order> findAllByOrderByCreateTimeAsc();
}
