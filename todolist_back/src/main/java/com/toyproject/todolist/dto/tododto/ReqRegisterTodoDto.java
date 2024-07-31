package com.toyproject.todolist.dto.tododto;

import com.toyproject.todolist.entity.Todo;
import lombok.Data;

@Data
public class ReqRegisterTodoDto {
    private String content;
    private String registerDate;
    private int state;
    private int userId;

    public Todo toEntity() {
        return Todo.builder()
                .content(content)
                .registerDate(registerDate)
                .state(state)
                .userId(userId)
                .build();
    }
}
