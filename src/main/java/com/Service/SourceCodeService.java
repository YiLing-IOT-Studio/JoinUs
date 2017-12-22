package com.Service;

import com.Model.UserInfo;
import com.Repository.SourceCodeDao;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.data.domain.Page;
import org.springframework.data.domain.PageRequest;
import org.springframework.stereotype.Service;

/**
 * @author: zhangocean
 * @Date: Created in 21:45 2017/12/21
 * Describe:分页查询
 */
@Service
public class SourceCodeService {

    @Autowired
    SourceCodeDao sourceCodeDao;

    public Page<UserInfo> getSourceCode(int pageNumber, int pageSize){
        PageRequest request = this.buildPageRequest(pageNumber,pageSize);
        Page<UserInfo> sourceCodes = this.sourceCodeDao.findAll(request);

        return sourceCodes;
    }

    private PageRequest buildPageRequest(int pageNumber, int pagzSize) {
        return new PageRequest(pageNumber - 1, pagzSize, null);
    }

}
