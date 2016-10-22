/**
 * Created by houdong on 16/8/18.
 */
$(function () {

    //通用方法
    this.fn = {
        versions: function () {
            var u = navigator.userAgent;
            return {
                trident: u.indexOf('Trident') > -1, //IE内核
                presto: u.indexOf('Presto') > -1, //opera内核
                webKit: u.indexOf('AppleWebKit') > -1, //苹果、谷歌内核
                gecko: u.indexOf('Gecko') > -1 && u.indexOf('KHTML') == -1,//火狐内核
                mobile: !!u.match(/AppleWebKit.*Mobile.*/), //是否为移动终端
                ios: !!u.match(/\(i[^;]+;( U;)? CPU.+Mac OS X/), //ios终端
                android: u.indexOf('Android') > -1 || u.indexOf('Linux') > -1, //android终端或uc浏览器
                iPhone: u.indexOf('iPhone') > -1, //是否为iPhone或QQHD浏览器
                iPad: u.indexOf('iPad') > -1, //是否iPad
                webApp: u.indexOf('Safari') == -1, //是否web应该程序，没有头部与底部
                weixin: u.indexOf('MicroMessenger') > -1, //是否微信
                qq: u.match(/\sQQ/i) == " qq" //是否QQ
            };
        },
        ajaxRequest: function (url, params, onSuccess, onFail) {
            if (params == '' || params == undefined) {
                params = {};
            }
            if (onSuccess == '' || onSuccess == undefined) {
                onSuccess = function () {
                }
            }
            if (onFail == '' || onFail == undefined) {
                onFail = function () {
                }
            }
            $.ajax({
                url: url,
                data: params,
                dataType: "json",
                type:'POST',
                success: function (data) {
                    if (data.result) {
                        onSuccess(data.data);
                    } else {
                        onFail(data.message);
                    }
                },
                fail: function (data) {
                    onFail(data);
                }
            });
        }
    };
});