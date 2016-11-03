package com.hd.controller;

import javax.annotation.Resource;
import javax.servlet.http.HttpServletResponse;

import com.hd.domain.Page;
import com.hd.domain.Result;
import com.hd.util.JsonUtil;
import com.hd.util.PageUtil;
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

    private JsonUtil jsonUtil = new JsonUtil();

    /**
     * 登录
     * @param user
     * @param response
     * @throws IOException
     */
    @RequestMapping(value = "/login.do")
    public void login(@RequestBody User user, HttpServletResponse response)throws IOException{
        User user2 = new User();
        user2.setLoginName(user.getLoginName());
        user2.setPassword(user.getPassword());
        JSONObject jsonObject = new JSONObject();
        Result result = new Result();
        if(userService.login(user2)!=null){
            result.setUser(userService.login(user2));
            jsonObject.put("result", true);
        }else{
            jsonObject.put("result", false);
            result.setMessage("用户名或密码错误");
        }
        jsonUtil.send(response,jsonObject,result);
    }

    /**
     * 查询单个用户信息
     * @param response
     * @throws IOException
     */
    @RequestMapping(value = "/select/user.do")
    public  void selectUserById(@RequestBody User user, HttpServletResponse response) throws IOException {
        JSONObject jsonObject = new JSONObject();
        List<User> list = userService.selectUserByName(user);
        int count = userService.selectSearchCount(user);
        Result result = new Result();
        if(list!=null&&list.size()!=0){
            result.setList(list);
            result.setCount(count);
            jsonObject.put("result", true);
        }else{
            jsonObject.put("result", false);
            result.setMessage("没有该用户");
        }
        jsonUtil.send(response,jsonObject,result);
    }

    /**
     * 查询所有用户信息
     * @param response
     * @throws IOException
     */
    @RequestMapping(value = "/select/list.do")
    public void selectUserList(HttpServletResponse response) throws IOException {
        JSONObject jsonObject = new JSONObject();
        List<User> list = userService.selectUserList();
        Result result = new Result();
        if(list!=null&&list.size()!=0){
            jsonObject.put("result", true);
            result.setList(list);
        }else{
            jsonObject.put("result", false);
            result.setMessage("列表为空");
        }
        jsonUtil.send(response,jsonObject,result);
    }

    /**
     * 查询所有用户信息-分页
     * @param page
     * @param response
     * @throws IOException
     */
    @RequestMapping(value = "/select/list/page.do")
    public void selectUserListByPage(@RequestBody Page page, HttpServletResponse response) throws IOException {
        PageUtil pageUtil = new PageUtil();
        int start = pageUtil.getStart(page);
        JSONObject jsonObject = new JSONObject();
        List<User> list = userService.selectUserListByPage(start,page.getPageSize());
        int count = userService.selectCount();
        Result result = new Result();
        if(list!=null&&count!=0){
            result.setCount(count);
            result.setList(list);
            jsonObject.put("result", true);
        }else{
            result.setMessage("列表为空");
            jsonObject.put("result", false);
        }
        jsonUtil.send(response,jsonObject,result);
    }

}
