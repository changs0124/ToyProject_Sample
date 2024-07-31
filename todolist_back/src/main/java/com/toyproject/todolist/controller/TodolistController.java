package com.toyproject.todolist.controller;

import com.toyproject.todolist.dto.tododto.ReqGetTodolistDto;
import com.toyproject.todolist.dto.tododto.ReqRegisterTodoDto;
import com.toyproject.todolist.dto.tododto.ReqSearchTodoDto;
import com.toyproject.todolist.dto.tododto.ReqUpdateTodoDto;
import com.toyproject.todolist.service.TodoService;
import lombok.extern.slf4j.Slf4j;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

@Slf4j
@RestController
@RequestMapping("/api/v1")
public class TodolistController {
    @Autowired
    private TodoService todoService;

    @PostMapping("/todo")
    public ResponseEntity<?> registerTodo(@RequestBody ReqRegisterTodoDto reqRegisterTodoDto) {
        log.info("{}", reqRegisterTodoDto);
        return ResponseEntity.ok().body(todoService.registerTodo(reqRegisterTodoDto));
    }

    @GetMapping("/todolist")
    public ResponseEntity<?> getListApi(ReqGetTodolistDto reqGetTodolistDto) {
        log.info("{}", reqGetTodolistDto);
        return ResponseEntity.ok().body(todoService.getlist(reqGetTodolistDto));
    }

    @PutMapping("/todo/{todoId}")
    public ResponseEntity<?> updateState(@PathVariable int todoId) {
        log.info("{}", todoId);
        return ResponseEntity.ok().body(todoService.updateState(todoId));
    }

    @PutMapping("/todo")
    public ResponseEntity<?> updateTodo(@RequestBody ReqUpdateTodoDto reqUpdateTodoDto) {
        log.info("{}", reqUpdateTodoDto);
        return ResponseEntity.ok().body(todoService.updateTodo(reqUpdateTodoDto));
    }

    @DeleteMapping("/todo/{todoId}")
    public ResponseEntity<?> deleteTodo(@PathVariable int todoId) {
        log.info("{}", todoId);
        return ResponseEntity.ok().body(todoService.deleteTodo(todoId));
    }

    @GetMapping("/search")
    public ResponseEntity<?> searchTodoList(ReqSearchTodoDto reqSearchTodoDto) {
        log.info("{}", reqSearchTodoDto);
        return ResponseEntity.ok().body(todoService.searchTodo(reqSearchTodoDto));
    }

}
