package com.hd.service;

import com.hd.domain.User;

import java.util.List;

public interface UserService {

	User selectUserById(String userId);

	User login(User user);

	List<User> selectUserList();

}
