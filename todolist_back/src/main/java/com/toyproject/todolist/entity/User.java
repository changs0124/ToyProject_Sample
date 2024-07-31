package com.toyproject.todolist.entity;

import com.toyproject.todolist.dto.userdto.RespLoginUserDto;
import lombok.AllArgsConstructor;
import lombok.Builder;
import lombok.Data;
import lombok.NoArgsConstructor;

@NoArgsConstructor
@AllArgsConstructor
@Builder
@Data
public class User {
    private int userId;
    private String userName;
    private String password;
    private String name;
    private String email;

    public RespLoginUserDto toRespLoginUserDto() {
        return RespLoginUserDto.builder()
                .userId(userId)
                .userName(userName)
                .build();
    }
}
