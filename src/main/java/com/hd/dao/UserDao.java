package com.hd.dao;

import com.hd.domain.User;


public interface UserDao {

	public User selectUserById(String userId);

	public User login(User user);

}
