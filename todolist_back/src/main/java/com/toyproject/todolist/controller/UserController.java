package com.toyproject.todolist.controller;

import com.toyproject.todolist.dto.userdto.ReqLoginUserDto;
import com.toyproject.todolist.dto.userdto.ReqRegisterUserDto;
import com.toyproject.todolist.dto.userdto.RespLoginUserDto;
import com.toyproject.todolist.service.UserService;
import lombok.extern.slf4j.Slf4j;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import javax.servlet.http.HttpServletRequest;
import javax.servlet.http.HttpSession;

@Slf4j
@RestController
@RequestMapping("/api/v1")
public class UserController {
    @Autowired
    private UserService userService;

    @GetMapping("/session")
    public ResponseEntity<?> getSession(HttpServletRequest request) {
        HttpSession session = request.getSession();
        RespLoginUserDto user = (RespLoginUserDto) session.getAttribute("user");
        log.info("ID: {}", session.getId());
        log.info("user: {}", user);

        return ResponseEntity.ok().body(user);

    }

    @GetMapping("/session/remove")
    public ResponseEntity<?> removeSession(HttpServletRequest request) {
        HttpSession session = request.getSession();
        session.invalidate();
        log.info("{}", request);
        return ResponseEntity.ok().body(null);
    }

    @PostMapping("/user")
    public ResponseEntity<?> registerUser(@RequestBody ReqRegisterUserDto reqRegisterUserDto) {
        log.info("{}", reqRegisterUserDto);
        return ResponseEntity.ok().body(userService.registerUser(reqRegisterUserDto));
    }

    @PostMapping("/login")
    public ResponseEntity<?> loginUser(@RequestBody ReqLoginUserDto reqLoginUserDto, HttpServletRequest request) {
        RespLoginUserDto user = userService.loginUser(reqLoginUserDto);
        HttpSession session = request.getSession();
        session.setAttribute("user", user);
        log.info("ID: {}", session.getId());
        log.info("{}", reqLoginUserDto);
        log.info("{}", request);
        return ResponseEntity.ok().body(user);
    }
}
