package com.hd.baseTest;

import com.hd.domain.User;
import com.hd.service.UserService;
import org.junit.Test;
import org.junit.runner.RunWith;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.test.context.ContextConfiguration;
import org.springframework.test.context.junit4.AbstractJUnit4SpringContextTests;  
import org.springframework.test.context.junit4.SpringJUnit4ClassRunner;

import java.util.List;

@ContextConfiguration(locations = { "classpath:application.xml" })  

@RunWith(SpringJUnit4ClassRunner.class)  
public class SpringTestCase extends AbstractJUnit4SpringContextTests {
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
