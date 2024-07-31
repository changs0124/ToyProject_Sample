package com.toyproject.todolist.service;

import com.toyproject.todolist.dto.tododto.*;
import com.toyproject.todolist.entity.Todo;
import com.toyproject.todolist.repository.TodoMapper;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.List;
import java.util.stream.Collectors;

@Service
public class TodoServiceImpl implements TodoService {
    @Autowired
    private TodoMapper todoMapper;

    @Override
    public int registerTodo(ReqRegisterTodoDto reqRegisterTodoDto) {
        return todoMapper.save(reqRegisterTodoDto.toEntity());
    }

    @Override
    public int updateState(int todoId) {
        return todoMapper.updateState(todoId);
    }

    @Override
    public int updateTodo(ReqUpdateTodoDto reqUpdateTodoDto) {
        return todoMapper.updateTodo(reqUpdateTodoDto.toEntityForUpdate());
    }

    @Override
    public int deleteTodo(int todoId) {
        return todoMapper.deleteTodo(todoId);
    }

    @Override
    public List<RespGetTodoDto> getlist(ReqGetTodolistDto reqGetTodolistDto) {
        List<Todo> lists = todoMapper.findTodolist(reqGetTodolistDto.toEntity());
        return lists.stream().map(Todo::toRespGetTodoDto).collect(Collectors.toList());
    }

    @Override
    public List<RespGetTodoDto> searchTodo(ReqSearchTodoDto reqSearchTodoDto) {
        List<Todo> todolist = todoMapper.findTodolistBycontent(reqSearchTodoDto.toEntity());
        return todolist.stream().map(Todo::toRespGetTodoDto).collect(Collectors.toList());
    }
}
