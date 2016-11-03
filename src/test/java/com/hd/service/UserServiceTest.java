package com.hd.service;

import org.junit.Test;  
import org.springframework.beans.factory.annotation.Autowired;  
import com.hd.baseTest.SpringTestCase;
import com.hd.domain.User;

public class UserServiceTest extends SpringTestCase {
	
	@Autowired  
    private UserService userService; 
	
	@Test  
    public void selectUserByIdTest(){
	    User user = new User();
        user.setName("侯栋");
        User user2 = userService.selectUserById(user);
        System.out.println(user2.getName() + ":" + user2.getPassword());
    }  
}
