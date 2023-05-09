package com.educative.ecommerce.service;

import com.educative.ecommerce.dto.cart.CartDto;
import com.educative.ecommerce.dto.cart.CartItemDto;
import com.educative.ecommerce.dto.checkout.CheckoutItemDto;
import com.educative.ecommerce.dto.order.OrderDto;
import com.educative.ecommerce.model.DetailOrder;
import com.educative.ecommerce.model.Order;
import com.educative.ecommerce.repository.OrderRepository;
import com.stripe.Stripe;
import com.stripe.exception.StripeException;
import com.stripe.model.checkout.Session;
import com.stripe.param.checkout.SessionCreateParams;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.beans.factory.annotation.Value;
import org.springframework.stereotype.Service;

import java.math.BigInteger;
import java.util.ArrayList;
import java.util.Date;
import java.util.List;
import java.util.stream.Collectors;

@Service
public class OrderService {

    @Value("${BASE_URL}")
    private String baseURL;

    @Value("${STRIPE_SECRET_KEY}")
    private String apiKey;

    private final CartService cartService;
    private final OrderRepository orderRepository;

    @Autowired
    public OrderService(CartService cartService, OrderRepository orderRepository) {
        this.cartService = cartService;
        this.orderRepository = orderRepository;
    }


    public Session createSession(List<CheckoutItemDto> checkoutItemDtoList) throws StripeException {

        String successURL = baseURL + "payment/success";

        String failureURL = baseURL + "payment/failed";

        Stripe.apiKey = apiKey;

        List<SessionCreateParams.LineItem> sessionItemList = new ArrayList<>();

        for (CheckoutItemDto checkoutItemDto : checkoutItemDtoList) {
            sessionItemList.add(createSessionLineItem(checkoutItemDto));
        }

        SessionCreateParams params = SessionCreateParams.builder()
                .addPaymentMethodType(SessionCreateParams.PaymentMethodType.CARD)
                .setMode(SessionCreateParams.Mode.PAYMENT)
                .setCancelUrl(failureURL)
                .addAllLineItem(sessionItemList)
                .setSuccessUrl(successURL)
                .build();
        return Session.create(params);
    }

    private SessionCreateParams.LineItem createSessionLineItem(CheckoutItemDto checkoutItemDto) {

        return SessionCreateParams.LineItem.builder()
                .setPriceData(createPriceData(checkoutItemDto))
                .setQuantity(Long.parseLong(String.valueOf(checkoutItemDto.getQuantity())))
                .build();

    }

    private SessionCreateParams.LineItem.PriceData createPriceData(CheckoutItemDto checkoutItemDto) {
        return SessionCreateParams.LineItem.PriceData.builder()
                .setCurrency("usd")
                .setUnitAmount((long) (checkoutItemDto.getPrice() * 100))
                .setProductData(
                        SessionCreateParams.LineItem.PriceData.ProductData.builder()
                                .setName(checkoutItemDto.getProductName())
                                .build())
                .build();
    }

    public Order createOrder(OrderDto orderDto) {
        CartDto cartDto = cartService.listCartItems(orderDto.getUser());
        Order order = new Order();
        order.setUser(orderDto.getUser());
        order.setCreateTime(new Date());
        order.setRecipientName(orderDto.getRecipientName());
        order.setRecipientPhoneNumber(orderDto.getRecipientPhoneNumber());
        order.setShippingAddress(orderDto.getShippingAddress());
        order.setTotalAmount((BigInteger.valueOf((int) cartDto.getTotalCost())));
        order.setStatus(Order.Status.PROCESSING);
        order.setPaymentMethod(orderDto.getPaymentMethod());
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
        cartService.checkoutCart(orderDto.getUser());
        return order;
    }
}
