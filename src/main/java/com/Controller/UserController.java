package com.Controller;

import com.Model.UserInfo;
import com.Service.GetUserInformation;
import com.Service.UserService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestMethod;
import org.springframework.web.bind.annotation.ResponseBody;

import javax.servlet.http.HttpServletRequest;

/**
 * @author: zhangocean
 * @Date: Created in 14:11 2017/12/6
 * Describe: 保存信息- 控制层
 */
@Controller
public class UserController {

    @Autowired
    UserService userService;

    @Autowired
    GetUserInformation getUserInformation;


    @RequestMapping(value = "/saveUser", method = RequestMethod.POST)
    @ResponseBody
    public void saveUser(HttpServletRequest request) {

        /**
         * 使用传统方法直接从表单获取数据
         */
//        String name = request.getParameter("Userid");
//        String tel = request.getParameter("Telephone");
//        String email = request.getParameter("Emailbox");
//        String selfBriefly = request.getParameter("Selfintroduction");
//        String professional = request.getParameter("Professional");
//        UserInfo userInfo = new UserInfo(name, tel, email, selfBriefly, professional);

        /**
         * 接收、处理前台传来Json字符串数组
         */
        String data = request.getParameter("data");
        UserInfo userInfo = getUserInformation.getUserInformation(data);



//        JSONArray arr=JSONArray.fromObject(data);
//        for(int i=0;i<arr.size();i++){
//            System.out.println(arr.getString(i));
//        }

        /**
         * 使用Gson处理Json字符串
         * Gson可直接将Json字符串中的数据对应实体类中的每个属性
         */
//         JSONObject jo = new JSONObject(data);
//        Gson gson = new Gson();
//        UserInfo userInfo = gson.fromJson(formJ,UserInfo.class);


        /**
         * 接受、处理前台Json字符串
         */
//        String coment = request.getParameter("formJ");
//        JSONObject jsonObject = new JSONObject(formJ);
//        String name = jsonObject.getString("Userid");
//        String tel = jsonObject.getString("Telephone");
//        String email = jsonObject.getString("Emailbox");
//        String selfBriefly = jsonObject.getString("Selfintroduction");
//        String professional = jsonObject.getString("Professional");
//        UserInfo userInfo = new UserInfo(name, tel, email, selfBriefly, professional);

        /**
         * 使用alibaba包直接获取Json字符串转换成实体类
         */
//        UserInfo userInfo = JSON.parseObject(data,UserInfo.class);
//        System.out.println(userInfo);

        //保存数据
        userService.saveUser(userInfo);

   }
}
