package com.toyproject.todolist.repository;

import com.toyproject.todolist.entity.User;
import org.apache.ibatis.annotations.Mapper;

import java.util.List;

@Mapper
public interface UserMapper {
    int save(User user);
    Integer duplicate(String userName);
    User findUserByUserName(String userName);
    List<User> getAllUsers();
}
