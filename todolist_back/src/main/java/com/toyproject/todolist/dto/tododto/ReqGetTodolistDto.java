package com.toyproject.todolist.dto.tododto;

import com.toyproject.todolist.entity.Todo;
import lombok.AllArgsConstructor;
import lombok.Builder;
import lombok.Data;
import lombok.NoArgsConstructor;

@NoArgsConstructor
@AllArgsConstructor
@Builder
@Data
public class ReqGetTodolistDto {
    private int userId;
    private String registerDate;

    public Todo toEntity() {
        return Todo.builder()
                .userId(userId)
                .registerDate(registerDate)
                .build();
    }
}
