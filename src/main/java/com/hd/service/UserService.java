package com.hd.service;

import com.hd.domain.User;

public interface UserService {

	User selectUserById(String userId);

	User login(User user);

}
