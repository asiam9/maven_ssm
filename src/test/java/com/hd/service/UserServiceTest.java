package com.hd.service;

import org.junit.Test;  
import org.springframework.beans.factory.annotation.Autowired;  
import com.hd.baseTest.SpringTestCase;
import com.hd.domain.User;

import java.util.List;

public class UserServiceTest extends SpringTestCase {
	
	@Autowired  
    private UserService userService; 
	
	@Test  
    public void selectUserByIdTest(){
	    User user = new User();
        user.setName("侯栋");
        List<User> list = userService.selectUserByName(user);
        System.out.println(list);
    }  
}
