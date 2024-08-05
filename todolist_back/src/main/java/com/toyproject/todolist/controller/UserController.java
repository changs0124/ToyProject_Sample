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
        Object userId = session.getAttribute("userId");
        return ResponseEntity.ok().body(userId);
    }

    @GetMapping("/session/remove")
    public ResponseEntity<?> removeSession(HttpServletRequest request) {
        HttpSession session = request.getSession();
        session.invalidate();
        log.info("{}", request);
        return ResponseEntity.ok().body(null);
    }

    @GetMapping("/user/duplicate/{userName}")
    public ResponseEntity<?> duplicateUserName(@PathVariable String userName) {
        log.info("{}", userName);
        return ResponseEntity.ok().body(userService.duplicateUserName(userName));
    }

    @PostMapping("/user")
    public ResponseEntity<?> registerUser(@RequestBody ReqRegisterUserDto reqRegisterUserDto) {
        log.info("{}", reqRegisterUserDto);
        return ResponseEntity.ok().body(userService.registerUser(reqRegisterUserDto));
    }

    @PostMapping("/login")
    public ResponseEntity<?> loginUser(@RequestBody ReqLoginUserDto reqLoginUserDto, HttpServletRequest request) {
        HttpSession session = request.getSession();
        return ResponseEntity.ok().body(userService.loginUser(reqLoginUserDto, session));
    }
}
