package com.Controller;

import com.Model.UserInfo;
import com.Service.SourceCodeService;
import com.Service.UserService;
import net.sf.json.JSONArray;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.data.domain.Page;
import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.ResponseBody;

import javax.servlet.http.HttpServletRequest;
import java.util.HashMap;
import java.util.List;
import java.util.Map;

/**
 * @author: zhangocean
 * @Date: Created in 22:01 2017/12/19
 * Describe: 查询信息- 控制层
 */
@Controller
public class GetAllController {

    @Autowired
    UserService userService;

    @Autowired
    SourceCodeService sourceCodeService;

    @RequestMapping("/getAllInfo")
    @ResponseBody
    public JSONArray getAll(HttpServletRequest request){

        int rows = Integer.parseInt(request.getParameter("rows"));
        int pageNo = Integer.parseInt(request.getParameter("pageNo"));


        Page<UserInfo> sourceCodes = this.sourceCodeService.getSourceCode(pageNo, rows);

        List<UserInfo> userInfoList = userService.findAllUsers();
        JSONArray jsonArray = JSONArray.fromObject(sourceCodes.getContent().toArray());
        Map<String, Object> map = new HashMap<>();

        //查询记录的总数以及共多少页
        map.put("totalSize",userInfoList.size());
        map.put("totalPage",Math.ceil((double)userInfoList.size()/10));
        jsonArray.add(map);
        System.out.println(jsonArray);

        return jsonArray;
    }

}
