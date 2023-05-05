package com.educative.ecommerce.dto.user;

import lombok.Data;

@Data
public class SignInReponseDto {

    private String status;
    private String token;
    private String role;
    private String lastName;
    private String firstName;
    private String message;

    public SignInReponseDto(String status, String token, String role, String firstName, String lastName,
            String message) {
        this.status = status;
        this.token = token;
        this.role = role;
        this.firstName = firstName;
        this.lastName = lastName;
        this.message = message;
    }
}
