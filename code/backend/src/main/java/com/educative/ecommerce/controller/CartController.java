package com.educative.ecommerce.controller;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.DeleteMapping;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PatchMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestParam;
import org.springframework.web.bind.annotation.RestController;

import com.educative.ecommerce.common.ApiResponse;
import com.educative.ecommerce.dto.cart.AddToCartDto;
import com.educative.ecommerce.dto.cart.CartDto;
import com.educative.ecommerce.model.User;
import com.educative.ecommerce.service.AuthenticationService;
import com.educative.ecommerce.service.CartService;

@RestController
@RequestMapping("/cart")
public class CartController {

    @Autowired
    private CartService cartService;

    @Autowired
    private AuthenticationService authenticationService;

    @PostMapping("/add")
    public ResponseEntity<ApiResponse> addToCart(@RequestBody AddToCartDto addToCartDto,
            @RequestParam("token") String token) {
        authenticationService.authenticate(token);

        User user = authenticationService.getUser(token);

        cartService.addToCart(addToCartDto, user);

        return new ResponseEntity<>(new ApiResponse(true, "Added to cart"), HttpStatus.CREATED);
    }

    @GetMapping("")
    public ResponseEntity<CartDto> getCartItems(@RequestParam("token") String token) {
        authenticationService.authenticate(token);

        User user = authenticationService.getUser(token);

        CartDto cartDto = cartService.listCartItems(user);
        return new ResponseEntity<>(cartDto, HttpStatus.OK);
    }

    @DeleteMapping("/delete/{cartItemId}")
    public ResponseEntity<ApiResponse> deleteCartItem(@PathVariable("cartItemId") Integer itemId,
            @RequestParam("token") String token) {

        authenticationService.authenticate(token);

        User user = authenticationService.getUser(token);

        cartService.deleteCartItem(itemId, user);

        return new ResponseEntity<>(new ApiResponse(true, "Item has been removed"), HttpStatus.OK);

    }

    @PatchMapping("/update/{cartItemId}")
    public ResponseEntity<ApiResponse> updateCartItem(@PathVariable("cartItemId") Integer itemId,
            @RequestParam("token") String token, @RequestParam("quantity") Integer quantity) {

        authenticationService.authenticate(token);

        User user = authenticationService.getUser(token);

        cartService.updateCartItem(itemId, user, quantity);

        return new ResponseEntity<>(new ApiResponse(true, "Item has been updated"), HttpStatus.OK);

    }

}
