package com.educative.ecommerce.service;

import com.educative.ecommerce.dto.cart.AddToCartDto;
import com.educative.ecommerce.dto.cart.CartDto;
import com.educative.ecommerce.dto.cart.CartItemDto;
import com.educative.ecommerce.exceptions.CustomException;
import com.educative.ecommerce.model.Cart;
import com.educative.ecommerce.model.Product;
import com.educative.ecommerce.model.User;
import com.educative.ecommerce.repository.CartRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.ArrayList;
import java.util.Date;
import java.util.List;
import java.util.Optional;

@Service
public class CartService {
    ProductService productService;
    CartRepository cartRepository;

    @Autowired
    public CartService(ProductService productService, CartRepository cartRepository) {
        this.productService = productService;
        this.cartRepository = cartRepository;
    }

    public void addToCart(AddToCartDto addToCartDto, User user) {

        Product product = productService.findById(addToCartDto.getProductId());

        Cart cart = new Cart();
        cart.setProduct(product);
        cart.setUser(user);
        cart.setQuantity(addToCartDto.getQuantity());
        cart.setCreatedDate(new Date());

        cartRepository.save(cart);

    }

    public CartDto listCartItems(User user) {
        List<Cart> cartList = cartRepository.findAllByUserOrderByCreatedDateDesc(user);

        List<CartItemDto> cartItems = new ArrayList<>();
        double totalCost = 0;
        for (Cart cart : cartList) {
            CartItemDto cartItemDto = new CartItemDto(cart);
            totalCost += cartItemDto.getQuantity() * cart.getProduct().getPrice();
            cartItems.add(cartItemDto);
        }

        CartDto cartDto = new CartDto();
        cartDto.setTotalCost(totalCost);
        cartDto.setCartItems(cartItems);
        return cartDto;
    }

    public void deleteCartItem(Integer cartItemId, User user) {

        Optional<Cart> optionalCart = cartRepository.findById(cartItemId);

        if (!optionalCart.isPresent()) {
            throw new CustomException("cart item id is invalid: " + cartItemId);
        }

        Cart cart = optionalCart.get();

        if (cart.getUser() != user) {
            throw new CustomException("cart item does not belong to user: " + cartItemId);
        }

        cartRepository.delete(cart);

    }

    public void updateCartItem(Integer cartItemId, User user, Integer quantity) {

        Optional<Cart> optionalCart = cartRepository.findById(cartItemId);

        if (!optionalCart.isPresent()) {
            throw new CustomException("cart item id is invalid: " + cartItemId);
        }

        Cart cart = optionalCart.get();

        if (cart.getUser() != user) {
            throw new CustomException("cart item does not belong to user: " + cartItemId);
        }

        cart.setQuantity(quantity);

        cartRepository.save(cart);
    }

    public void checkoutCart(User user) {
        cartRepository.deleteCartsByUser(user);
    }
}
