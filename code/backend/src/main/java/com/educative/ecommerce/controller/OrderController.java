package com.educative.ecommerce.controller;

import java.util.List;

import com.educative.ecommerce.common.ApiResponse;
import com.educative.ecommerce.dto.order.OrderAddDto;
import com.educative.ecommerce.dto.order.OrderDto;
import com.educative.ecommerce.model.Order;
import com.educative.ecommerce.model.User;
import com.educative.ecommerce.service.AuthenticationService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import com.educative.ecommerce.service.OrderService;

@RestController
@RequestMapping("/order")
public class OrderController {

    // @Autowired
    // private AuthenticationService authenticationService;

    private OrderService orderService;
    private AuthenticationService authenticationService;

    @Autowired
    public OrderController(OrderService orderService, AuthenticationService authenticationService) {
        this.orderService = orderService;
        this.authenticationService = authenticationService;
    }

    @PostMapping("checkoutCart")
    public ResponseEntity<ApiResponse> checkoutCart(@RequestParam("token") String token,
                                                    @RequestBody OrderAddDto orderAddDto) {
        User user = authenticationService.getUser(token);
        orderAddDto.setUser(user);
        orderService.createOrder(orderAddDto);
        return ResponseEntity.status(HttpStatus.OK).body(
                new ApiResponse(true, "checkout successfully")
        );
    }

    @GetMapping("")
    public ResponseEntity<?> getOrders(@RequestParam("token") String token) {
        authenticationService.authenticate(token);
        User user = authenticationService.getUser(token);
        List<OrderDto> orders = orderService.getOrdersByUser(user);
        return ResponseEntity.status(HttpStatus.OK).body(orders);
    }

    @GetMapping("get/{id}")
    public Order getOrderById(@PathVariable("id") Integer id) {
        return orderService.getOrderById(id);
    }

}
