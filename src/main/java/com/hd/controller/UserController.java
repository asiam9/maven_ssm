package com.hd.controller;

import javax.annotation.Resource;
import javax.servlet.http.HttpServletRequest;
import javax.servlet.http.HttpServletResponse;

import net.sf.json.JSONObject;
import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import com.hd.domain.User;
import com.hd.service.UserService;

import java.io.IOException;
import java.util.List;

@Controller
@RequestMapping(value = "/api/user")
public class UserController {

    @Resource
    private UserService userService;

    @RequestMapping(value = "/select.do")
    public  void selectUserById(HttpServletRequest request, HttpServletResponse response) throws IOException {
        String userId = request.getParameter("userId");
        JSONObject jsonObject = new JSONObject();
        User user = userService.selectUserById(userId);
        if(user!=null){
            jsonObject.put("result", true);
            jsonObject.put("data", user);
        }else{
            jsonObject.put("result", false);
            jsonObject.put("message", "未查到该用户");
        }
        response.getWriter().print(jsonObject.toString());
    }

    @RequestMapping(value = "/select/list.do")
    public void selectUserList(HttpServletRequest request, HttpServletResponse response) throws IOException {
        JSONObject jsonObject = new JSONObject();
        List<User> list = userService.selectUserList();
        if(list!=null){
            jsonObject.put("result", true);
            jsonObject.put("data", list);
        }else{
            jsonObject.put("result", false);
            jsonObject.put("message", "列表为空");
        }
        response.getWriter().print(jsonObject.toString());
    }

    @RequestMapping(value = "/login.do")
    public void login(@RequestBody User user, HttpServletResponse response)throws IOException{
        User user2 = new User();
        user2.setLoginName(user.getLoginName());
        user2.setPassword(user.getPassword());
        JSONObject jsonObject = new JSONObject();
        if(userService.login(user2)!=null){
            jsonObject.put("result", true);
            jsonObject.put("data", userService.login(user2));
        }else{
            jsonObject.put("result", false);
            jsonObject.put("message", "用户名或密码错误");
        }
        response.setContentType("text/html;charset=UTF-8");
        response.getWriter().print(jsonObject.toString());
    }

}
