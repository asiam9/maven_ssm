package com.hd.util;

import com.hd.domain.Result;
import net.sf.json.JSONObject;

import javax.servlet.http.HttpServletResponse;
import java.io.IOException;

/**
 * Created by houdong on 16/11/2.
 */
public class JsonUtil {

    public void send(HttpServletResponse response, JSONObject jsonObject) throws IOException {
        response.setContentType("text/html;charset=UTF-8");
        response.getWriter().print(jsonObject.toString());
    }
}
