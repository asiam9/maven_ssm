/**
 * Created by houdong on 16/8/26.
 */

var React = require('react');
import * as ItemsActions from "Actions";
import {bindActionCreators} from "redux";
import {UserRoute} from "UserRoute";
import {connect} from "react-redux";
import Api from "Api";
var initialParams = require('InitialProps').Login;

var Login = React.createClass({

    mixins: [Api],

    getDefaultProps: function () {
        return {
            Login: initialParams
        }
    },
    getInitialState: function () {
        return {
            loginName: '',
            password: ''
        }
    },
    handleClickLogin: function () {
        let loginName = this.state.loginName;
        let password = this.state.password;
        let self = this;
        if (loginName == '') {
            alert("请填写登录名");
            return false;
        } else if (password == '') {
            alert("请填写密码");
            return false;
        } else {
            let params = {
                loginName: loginName,
                password: password
            };
            self.loginAPI(params, function (data) {
                self.props.Login.loginName = data.loginName;
                self.props.Login.password = data.userPassword;
                self.props.Login.id = data.id;
                self.props.Login.name = data.name;
                let param = {
                    Login: self.props.Login
                };
                self.props.actions.changeComponentsState(param);
                self.props.history.push(UserRoute.HomePage);
            }, function (error) {
                alert(error);
            });

        }
    },
    handleKeyLogin: function (event) {
        if(event.keyCode==13) {
            this.handleClickLogin();
        }
    },
    handleChangeName: function (event) {
        this.setState({
            loginName: event.target.value
        });
    },
    handleChangePassword: function (event) {
        this.setState({
            password: event.target.value
        });
    },
    render: function () {
        return (
            <div className="login-box" onKeyUp={this.handleKeyLogin}>
                <div className="login-logo">
                    <b>H5</b>管理后台
                </div>
                <div className="login-box-body">
                    <div>
                        <div className="form-group has-feedback">
                            <input type="text"
                                   className="form-control"
                                   placeholder="请输入登录名"
                                   onChange={this.handleChangeName}/>
                            <span className="glyphicon glyphicon-user form-control-feedback"></span>
                        </div>
                        <div className="form-group has-feedback">
                            <input type="password"
                                   className="form-control"
                                   placeholder="请输入密码"
                                   onChange={this.handleChangePassword}/>
                            <span className="glyphicon glyphicon-lock form-control-feedback"></span>
                        </div>
                        <div className="row">
                            <div className="col-xs-12">
                                <button className="btn btn-primary btn-block btn-flat"
                                        style={{margin: '0 auto', width: '100px'}}
                                        onClick={this.handleClickLogin}>登录
                                </button>
                            </div>

                        </div>
                    </div>
                </div>
            </div>
        )
    }
});

module.exports = connect(state => ({
    Login: state.componentsReducer.Login
}), dispatch => ({
    actions: bindActionCreators(ItemsActions, dispatch)
}))(Login);
