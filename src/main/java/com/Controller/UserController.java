package com.Controller;

import com.Model.UserInfo;
import com.Service.UserService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestMethod;

import javax.servlet.http.HttpServletRequest;

/**
 * @author: zhangocean
 * @Date: Created in 14:11 2017/12/6
 * Describe: 控制层
 */
@Controller
public class UserController {

    @Autowired
    UserService userService;

    @RequestMapping("/")
    public String index() {
        return "index";
    }

    @RequestMapping(value = "/submit", method = RequestMethod.POST)
    public String submit(HttpServletRequest request) {

        //接收页面数据
        String name = request.getParameter("Userid");
        String tel = request.getParameter("Telephone");
        String email = request.getParameter("Emailbox");
        String selfBriefly = request.getParameter("Selfintroduction");
        String professional = request.getParameter("Professional");

        UserInfo userInfo = new UserInfo(name, tel, email, selfBriefly, professional);

        //保存数据
        userService.saveUser(userInfo);

        //向页面传值
        request.setAttribute("userInfo", userInfo);

        //向页面跳转
        return "index";
   }

}
