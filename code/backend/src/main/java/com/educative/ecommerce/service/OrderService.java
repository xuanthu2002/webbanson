package com.educative.ecommerce.service;

import com.educative.ecommerce.dto.cart.CartDto;
import com.educative.ecommerce.dto.cart.CartItemDto;
import com.educative.ecommerce.dto.order.OrderAddDto;
import com.educative.ecommerce.dto.order.OrderDetailDto;
import com.educative.ecommerce.dto.order.OrderDto;
import com.educative.ecommerce.model.DetailOrder;
import com.educative.ecommerce.model.Order;
import com.educative.ecommerce.model.User;
import com.educative.ecommerce.repository.OrderRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.math.BigInteger;
import java.util.ArrayList;
import java.util.Date;
import java.util.List;
import java.util.Optional;

@Service
public class OrderService {
    private final CartService cartService;
    private final OrderRepository orderRepository;

    @Autowired
    public OrderService(CartService cartService, OrderRepository orderRepository) {
        this.cartService = cartService;
        this.orderRepository = orderRepository;
    }

    public Order createOrder(OrderAddDto orderAddDto) {
        CartDto cartDto = cartService.listCartItems(orderAddDto.getUser());
        Order order = new Order();
        order.setUser(orderAddDto.getUser());
        order.setCreateTime(new Date());
        order.setRecipientName(orderAddDto.getRecipientName());
        order.setRecipientPhoneNumber(orderAddDto.getRecipientPhoneNumber());
        order.setShippingAddress(orderAddDto.getShippingAddress());
        order.setTotalAmount((BigInteger.valueOf((int) cartDto.getTotalCost())));
        order.setStatus(Order.Status.PROCESSING);
        order.setPaymentMethod(orderAddDto.getPaymentMethod());
        List<CartItemDto> cartItemDtos = cartDto.getCartItems();
        for(CartItemDto cartItemDto : cartItemDtos) {
            order.getDetailOrderList().add(
                    new DetailOrder(
                            null,
                            order,
                            cartItemDto.getProduct(),
                            cartItemDto.getQuantity(),
                            BigInteger.valueOf((long) (cartItemDto.getQuantity() * cartItemDto.getProduct().getPrice()))
                    )
            );
        }
        orderRepository.save(order);
        cartService.checkoutCart(orderAddDto.getUser());
        return order;
    }

    public List<OrderDto> getOrdersByUser(User user) {
        List<Order> orders = (List<Order>) orderRepository.getOrdersByUserOrderByCreateTimeDesc(user);
        List<OrderDto> orderDtoList = new ArrayList<>();
        for(Order order : orders) {
            orderDtoList.add(
                    new OrderDto(
                            order.getId(),
                            order.getTotalAmount(),
                            order.getCreateTime(),
                            order.getPaymentMethod(),
                            order.getStatus()
                    )
            );
        }
        return orderDtoList;
    }

    public OrderDetailDto getDetailOrder(Integer id) {
        Optional<Order> orderOptional = orderRepository.findById(id);
        OrderDetailDto orderDetailDto = new OrderDetailDto();
        if(orderOptional.isPresent()) {
            Order order = orderOptional.get();
            orderDetailDto.setId(order.getId());
            orderDetailDto.setCreateTime(order.getCreateTime());
            orderDetailDto.setTotalAmount(order.getTotalAmount());
            orderDetailDto.setPaymentMethod(order.getPaymentMethod());
            orderDetailDto.setStatus(order.getStatus());
            orderDetailDto.setDetailOrders(order.getDetailOrderList());
            orderDetailDto.setRecipientName(order.getRecipientName());
            orderDetailDto.setRecipientPhoneNumber(order.getRecipientPhoneNumber());
            orderDetailDto.setShippingAddress(order.getShippingAddress());
        }
        return orderDetailDto;
    }

    public void cancelOrderById(Integer id) {
        Order order = orderRepository.findById(id).get();
        order.setStatus(Order.Status.CANCELED);
        orderRepository.save(order);
    }

    public void doneOrderById(Integer id) {
        Order order = orderRepository.findById(id).get();
        order.setStatus(Order.Status.DONE);
        orderRepository.save(order);
    }

    public List<OrderDto> getAllOrders() {
        List<Order> orders = (List<Order>) orderRepository.findAllByOrderByCreateTimeDesc();
        List<OrderDto> orderDtoList = new ArrayList<>();
        for(Order order : orders) {
            orderDtoList.add(
                    new OrderDto(
                            order.getId(),
                            order.getTotalAmount(),
                            order.getCreateTime(),
                            order.getPaymentMethod(),
                            order.getStatus()
                    )
            );
        }
        return orderDtoList;
    }
}
