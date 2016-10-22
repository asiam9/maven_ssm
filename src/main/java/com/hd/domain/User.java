package com.hd.domain;

public class User {
	
	private String userId;
    private String userName;  
    private String userPassword;  
    private String loginName;

  
    public String getUserId() {
        return userId;  
    }  
  
    public void setUserId(String userId) {
        this.userId = userId;  
    }  
  
    public String getUserName() {  
        return userName;  
    }  
  
    public void setUserName(String userName) {  
        this.userName = userName;  
    }  
  
    public String getUserPassword() {  
        return userPassword;  
    }  
  
    public void setUserPassword(String userPassword) {  
        this.userPassword = userPassword;  
    }

    public String getLoginName() {
        return loginName;
    }

    public void setLoginName(String loginName) {
        this.loginName = loginName;
    }



}
