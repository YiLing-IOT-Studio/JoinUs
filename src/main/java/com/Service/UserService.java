package com.Service;

import com.Model.UserInfo;
import com.Repository.UserRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

/**
 * @author: zhangocean
 * @Date: Created in 14:11 2017/12/6
 * Describe: 处理业务逻辑信息
 */
@Service
public class UserService {

    @Autowired
    UserRepository userRepository;

    /**
     * 保存信息
     */
    public void saveUser(UserInfo userInfo) {
        userRepository.save(userInfo);
    }

}
