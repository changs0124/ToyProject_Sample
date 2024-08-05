package com.toyproject.todolist.service;

import com.toyproject.todolist.dto.userdto.ReqLoginUserDto;
import com.toyproject.todolist.dto.userdto.ReqRegisterUserDto;
import com.toyproject.todolist.dto.userdto.RespLoginUserDto;

import javax.servlet.http.HttpSession;

public interface UserService {
    int registerUser(ReqRegisterUserDto reqRegisterUserDto);
    Integer duplicateUserName(String userName);
    boolean loginUser(ReqLoginUserDto reqLoginUserDto, HttpSession session);
}
