package com.Service;

import com.Model.UserInfo;
import net.sf.json.JSONArray;
import net.sf.json.JSONObject;
import org.slf4j.Logger;
import org.slf4j.LoggerFactory;
import org.springframework.stereotype.Service;

import java.util.HashMap;
import java.util.Map;

/**
 * @author: zhangocean
 * @Date: Created in 19:51 2017/12/18
 * Describe: 解析Json字符串数组
 */
@Service
public class GetUserInformation {

    Logger logger = LoggerFactory.getLogger(this.getClass());

    public UserInfo getUserInformation(String data) {

        JSONArray jsonArray = JSONArray.fromObject(data);

        logger.info("json是"+jsonArray.toString());

        JSONObject jsonObject;
        Map<String,String> map = new HashMap<>(5);
        for(int i=0;i<jsonArray.size();i++) {
            jsonObject = jsonArray.getJSONObject(i);
            map.put((String) jsonObject.get("name"), (String) jsonObject.get("value"));
        }
        String name = map.get("Userid");
        String tel = map.get("Telephone");
        String email = map.get("Emailbox");
        String selfBriefly = map.get("Selfintroduction");
        String professional = map.get("Professional");

        UserInfo userInfo = new UserInfo(name, tel, email, selfBriefly, professional);

        return userInfo;
    }

}
