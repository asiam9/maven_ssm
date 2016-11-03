package com.hd.service;

import com.hd.domain.User;

import java.util.List;

public interface UserService {

	List<User> selectUserByName(User user);

	User login(User user);

	List<User> selectUserList();

	List<User> selectUserListByPage(int start ,int end);

	int selectCount();

	int selectSearchCount(User user);

}
