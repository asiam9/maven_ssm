package com.hd.util;

import com.hd.domain.Page;

/**
 * Created by houdong on 16/11/2.
 */
public class PageUtil {

    public int getStart(Page page) {
        return (page.getPageNow() - 1) * page.getPageSize();
    }

    public int getEnd(Page page) {
        return page.getPageNow() * page.getPageSize();
    }

}
