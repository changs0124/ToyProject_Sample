package com.toyproject.todolist.dto.tododto;

import lombok.AllArgsConstructor;
import lombok.Builder;
import lombok.Data;
import lombok.NoArgsConstructor;

@NoArgsConstructor
@AllArgsConstructor
@Builder
@Data
public class RespGetTodoDto {
    private int todoId;
    private String content;
    private String registerDate;
    private int state;
    private int userId;
}
