package com.toyproject.todolist.dto.tododto;

import com.toyproject.todolist.entity.Todo;
import lombok.Data;

@Data
public class ReqUpdateTodoDto {
    private int todoId;
    private String content;
    private String registerDate;

    public Todo toEntityForState() {
        return Todo.builder()
                .todoId(todoId)
                .build();
    }

    public Todo toEntityForUpdate() {
        return Todo.builder()
                .todoId(todoId)
                .content(content)
                .registerDate(registerDate)
                .build();
    }
}
