package com.hd.baseTest;

import com.hd.domain.User;
import com.hd.service.UserService;
import org.junit.Test;
import org.junit.runner.RunWith;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.test.context.ContextConfiguration;
import org.springframework.test.context.junit4.AbstractJUnit4SpringContextTests;  
import org.springframework.test.context.junit4.SpringJUnit4ClassRunner;  

//指定bean注入的配置文件  
@ContextConfiguration(locations = { "classpath:application.xml" })  
//使用标准的JUnit @RunWith注释来告诉JUnit使用Spring TestRunner  
@RunWith(SpringJUnit4ClassRunner.class)  
public class SpringTestCase extends AbstractJUnit4SpringContextTests {
    @Autowired
    private UserService userService;

    @Test
    public void selectUserByIdTest(){
        User user = userService.selectUserById("1");
        System.out.println(user.getUserName() + ":" + user.getUserPassword());
    }
}
