package com.educative.ecommerce.dto.user;

import lombok.Data;

@Data
public class UserDto {
    private String firstName;
    private String lastName;
    private String email;
    private String role;
}
