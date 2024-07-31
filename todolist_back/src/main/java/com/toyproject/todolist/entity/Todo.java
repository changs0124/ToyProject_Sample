package com.toyproject.todolist.entity;

import com.toyproject.todolist.dto.tododto.RespGetTodoDto;
import lombok.AllArgsConstructor;
import lombok.Builder;
import lombok.Data;
import lombok.NoArgsConstructor;

@NoArgsConstructor
@AllArgsConstructor
@Builder
@Data
public class Todo {
    private int todoId;
    private String content;
    private int userId;
    private String registerDate;
    private int state;

    public RespGetTodoDto toRespGetTodoDto() {
        return RespGetTodoDto.builder()
                .todoId(todoId)
                .content(content)
                .registerDate(registerDate)
                .state(state)
                .build();
    }
}
