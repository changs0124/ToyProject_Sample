package com.toyproject.todolist.dto.userdto;

import lombok.Builder;
import lombok.Data;

@Builder
@Data
public class RespLoginUserDto {
    private int userId;
    private String userName;
}
