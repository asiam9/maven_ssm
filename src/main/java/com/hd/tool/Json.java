package com.hd.tool;

import com.hd.domain.Data;
import net.sf.json.JSONObject;

import javax.servlet.http.HttpServletResponse;
import java.io.IOException;

/**
 * Created by houdong on 16/10/22.
 */
public class Json {

    JSONObject jsonObject = new JSONObject();

    private void sendJson(HttpServletResponse response, JSONObject jsonObject) throws IOException{
        response.getWriter().print(jsonObject.toString());
    }
    public void setJson(HttpServletResponse response,String key,Object value) throws IOException{
        jsonObject.put(key, value);
        sendJson(response,jsonObject);
    }
}
