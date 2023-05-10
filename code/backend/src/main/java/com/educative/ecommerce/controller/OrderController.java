package com.educative.ecommerce.controller;

import java.util.List;

import com.educative.ecommerce.dto.order.OrderDto;
import com.educative.ecommerce.model.Order;
import com.educative.ecommerce.model.User;
import com.educative.ecommerce.service.AuthenticationService;
import com.educative.ecommerce.service.UserService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import com.educative.ecommerce.dto.checkout.CheckoutItemDto;
import com.educative.ecommerce.dto.checkout.StripeResponse;
// import com.educative.ecommerce.service.AuthenticationService;
import com.educative.ecommerce.service.OrderService;
import com.stripe.exception.StripeException;
import com.stripe.model.checkout.Session;

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

    @PostMapping("/create-checkout-session")
    public ResponseEntity<StripeResponse> checkoutList(@RequestBody List<CheckoutItemDto> checkoutItemDtoList)
            throws StripeException {
        Session session = orderService.createSession(checkoutItemDtoList);
        StripeResponse stripeResponse = new StripeResponse(session.getId());
        return new ResponseEntity<>(stripeResponse, HttpStatus.OK);
    }

    @PostMapping("checkoutCart")
    public void checkoutCart(@RequestParam("token") String token,
                             @RequestBody OrderDto orderDto) {
        User user = authenticationService.getUser(token);
        orderDto.setUser(user);
        orderService.createOrder(orderDto);
    }

    @GetMapping("get/{id}")
    public Order getOrderById(@PathVariable("id") Integer id) {
        return orderService.getOrderById(id);
    }

}
