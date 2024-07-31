package com.toyproject.todolist.service;

import com.toyproject.todolist.dto.userdto.ReqLoginUserDto;
import com.toyproject.todolist.dto.userdto.ReqRegisterUserDto;
import com.toyproject.todolist.dto.userdto.RespLoginUserDto;

public interface UserService {
    int registerUser(ReqRegisterUserDto reqRegisterUserDto);
    RespLoginUserDto loginUser(ReqLoginUserDto reqLoginUserDto);
}
