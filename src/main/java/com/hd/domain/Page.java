package com.hd.domain;

/**
 * Created by houdong on 16/11/2.
 */
public class Page {

    private int pageNow;
    private int pageSize;

    public int getPageNow() {
        return pageNow;
    }

    public void setPageNow(int pageNow) {
        this.pageNow = pageNow;
    }

    public int getPageSize() {
        return pageSize;
    }

    public void setPageSize(int pageSize) {
        this.pageSize = pageSize;
    }
}
