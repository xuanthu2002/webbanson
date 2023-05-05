package com.educative.ecommerce.controller;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import com.educative.ecommerce.dto.ResponseDto;
import com.educative.ecommerce.dto.user.SignInDto;
import com.educative.ecommerce.dto.user.SignInReponseDto;
import com.educative.ecommerce.dto.user.SignupDto;
import com.educative.ecommerce.service.UserService;

@RequestMapping("user")
@RestController
public class UserController {

    @Autowired
    UserService userService;

    @PostMapping("/signup")
    public ResponseDto signup(@RequestBody SignupDto signupDto) {
        return userService.signUp(signupDto);
    }

    @PostMapping("/signin")
    public SignInReponseDto signIn(@RequestBody SignInDto signInDto) {
        return userService.signIn(signInDto);
    }

}
