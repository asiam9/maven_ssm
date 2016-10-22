package com.hd.service.impl;

import com.hd.service.UserService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;
import com.hd.dao.UserDao;
import com.hd.domain.User;


@Service  
public class UserServiceImpl implements UserService {

	@Autowired
    private UserDao userDao;  
  
    public User selectUserById(String userId) {
        return userDao.selectUserById(userId);  
          
    }

    public User login(User user) {
        return userDao.login(user);

    }

}
