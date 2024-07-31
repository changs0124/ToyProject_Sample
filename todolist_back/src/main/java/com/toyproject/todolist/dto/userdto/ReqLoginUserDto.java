package com.toyproject.todolist.dto.userdto;

import com.toyproject.todolist.entity.User;
import lombok.Data;

@Data
public class ReqLoginUserDto {
    private String userName;
    private String password;

    public User toEntity() {
        return User.builder()
                .userName(userName)
                .password(password)
                .build();
    }
}
