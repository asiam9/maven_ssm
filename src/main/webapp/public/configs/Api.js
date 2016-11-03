import request from 'superagent';

//接口调用
function _request(url, type = 'post', params = {}, onSuccess, onFailed = function (e) {
    alert(e)
}) {
    switch (type) {
        case 'get':
            request
                .get(url+'.do')
                .query(params)
                .end(function (err, res) {
                    if (!res) {
                        alert(err);
                        return;
                    }
                    if (res.statusCode == 401) {
                        window.location.href = '/login';
                    } else if (res.statusCode == 200) {
                        if (res.text) {
                            let data = JSON.parse(res.text);
                            if (data.result) {
                                onSuccess(data.data);
                            } else {
                                onFailed(data.message);
                            }
                        }
                    } else {
                        alert('服务器错误');
                    }
                });
            break;
        case 'post':
            request
                .post(url+'.do')
                .send(params)
                .end(function (err, res) {
                    if (!res) {
                        alert(err);
                        return;
                    }
                    if (res.statusCode == 401) {
                        window.location.href = '/login';
                    } else if (res.statusCode == 200) {
                        if (res.text) {
                            let data = JSON.parse(res.text);
                            if (data.result) {
                                onSuccess(data.data);
                            } else {
                                onFailed(data.data.message);
                            }
                        }
                    } else {
                        alert('服务器错误');
                    }
                });
    }

}

module.exports = {

    _request: _request,

    /******************************************************************************
     * User
     ******************************************************************************/
    loginAPI: function (params, onSuccess, onFailed) {
        _request('/api/user/login', 'post', params, onSuccess, onFailed);
    },
    selectUserListByPageAPI: function (params, onSuccess, onFailed) {
        _request('/api/user/select/list/page', 'post', params, onSuccess, onFailed);
    },
    selectUserListAPI: function (params, onSuccess, onFailed) {
        _request('/api/user/select/list', 'post', params, onSuccess, onFailed);
    },
    selectUserByIdAPI: function (params, onSuccess, onFailed) {
        _request('/api/user/select/user', 'post', params, onSuccess, onFailed);
    },
};
