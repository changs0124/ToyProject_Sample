package com.toyproject.todolist.dto.userdto;

import lombok.Data;

@Data
public class ReqRegisterUserDto {
    private String userName;
    private String password;
    private String name;
    private String email;
}
