package com.toyproject.todolist.service;

import com.toyproject.todolist.dto.userdto.ReqLoginUserDto;
import com.toyproject.todolist.dto.userdto.ReqRegisterUserDto;
import com.toyproject.todolist.dto.userdto.RespLoginUserDto;
import com.toyproject.todolist.entity.User;
import com.toyproject.todolist.repository.UserMapper;
import lombok.extern.slf4j.Slf4j;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import javax.servlet.http.HttpServletRequest;
import javax.servlet.http.HttpSession;
import java.util.List;

@Slf4j
@Service
public class UserServiceImpl implements UserService {
    @Autowired
    private UserMapper userMapper;

    @Override
    public int registerUser(ReqRegisterUserDto reqRegisterUserDto) {

        User user = User.builder()
                .userName(reqRegisterUserDto.getUserName())
                .password(reqRegisterUserDto.getPassword())
                .name(reqRegisterUserDto.getName())
                .email(reqRegisterUserDto.getEmail())
                .build();
        return userMapper.save(user);
    }

    @Override
    public Integer duplicateUserName(String userName) {
        Integer duplicateCount = userMapper.duplicate(userName);
        if(duplicateCount == null) {
            return 1;
        } else {
            return 0;
        }
    }

    @Override
    public boolean loginUser(ReqLoginUserDto reqLoginUserDto, HttpSession session) {
        User user = userMapper.findUserByUserName(reqLoginUserDto.getUserName());

        if(user == null) {
            return false;
        }

        if(!user.getPassword().equals(reqLoginUserDto.getPassword())) {
            return false;
        }

        session.setAttribute("userId", user.getUserId());
        return true;
    }
}
