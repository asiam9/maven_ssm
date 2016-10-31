package com.hd.dao;

import com.hd.domain.User;

import java.util.List;


public interface UserDao {

	public User selectUserById(String userId);

	public User login(User user);

	public List<User> selectUserList();

}
