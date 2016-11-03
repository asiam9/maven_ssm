package com.hd.service.impl;

import com.hd.service.UserService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;
import com.hd.dao.UserDao;
import com.hd.domain.User;

import java.util.List;


@Service  
public class UserServiceImpl implements UserService {

	@Autowired
    private UserDao userDao;  
  
    public User selectUserById(User user) {
        return userDao.selectUserById(user);
          
    }

    public User login(User user) {
        return userDao.login(user);

    }

    @Override
    public List<User> selectUserList() {
        return userDao.selectUserList();
    }

    @Override
    public List<User> selectUserListByPage(int start ,int end) {
        return userDao.selectUserListByPage(start,end);
    }

    @Override
    public int selectCount() {
        return userDao.selectCount();
    }

}
