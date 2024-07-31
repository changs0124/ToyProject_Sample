package com.toyproject.todolist.dto.tododto;

import com.toyproject.todolist.entity.Todo;
import lombok.Builder;
import lombok.Data;

@Builder
@Data
public class ReqSearchTodoDto {
    private String content;
    private int userId;
    private String registerDate;


    public Todo toEntity() {
        return Todo.builder()
                .content(content)
                .userId(userId)
                .registerDate(registerDate)
                .build();
    }
}
