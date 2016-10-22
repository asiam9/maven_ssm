$(function () {

    /*****************************************************
     * 定义全局变量
     *****************************************************/

    /*****************************************************
     * 定义全局方法
     ****************************************************/

    /*****************************************************
     * 方法执行
     ****************************************************/

    /*****************************************************
     * 句柄
     ****************************************************/

    $('.submit').on('click',function () {
        var loginName = $('.loginName').val();
        var userPassword = $('.userPassword').val();
        if(loginName==''){
            alert('请输入登录名!');
            return false;

        }else if(userPassword==''){
            alert('请输入密码!');
            return false;
        }else{
            var params = {
                loginName:loginName,
                userPassword:userPassword
            };
            this.fn.ajaxRequest('/api/user/login',params,function () {
                window.location.href = 'index.html';
            },function (error) {
                alert(error);
            });
        }
    }.bind(this))

});
