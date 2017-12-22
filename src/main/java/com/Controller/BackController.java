package com.Controller;

import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.RequestMapping;

/**
 * @author: zhangocean
 * @Date: Created in 14:45 2017/12/20
 * Describe: 返回控制层
 */
@Controller
public class BackController {

    @RequestMapping("/")
    public String index() {
        return "index";
    }

    @RequestMapping("/haha")
    public String info() {
        return "info";
    }

}
