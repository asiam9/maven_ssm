/**
 * Created by houdong on 16/11/3.
 */

var React = require('react');
import {bindActionCreators} from "redux";
import {connect} from "react-redux";
var initialParams = require('InitialProps').User;
var SidebarLayout = React.createClass({

    /******************************************************************************
     * life cycle functions
     ******************************************************************************/
    getDefaultProps: function () {
        return {
            User: initialParams
        };
    },

    /******************************************************************************
     * render functions
     ******************************************************************************/
    render: function () {
        return (
            <div className="main-sidebar">
                <div className="sidebar">
                    <div className="user-panel">
                        <div className="pull-left image">
                            <img src="public/build/images/user2-160x160.jpg" className="img-circle" alt="User Image"/>
                        </div>
                        <div className="pull-left info">
                            <p>{this.props.User.name}</p>
                        </div>
                    </div>
                    <ul className="sidebar-menu">
                        <li className="header">列表一览</li>
                        <li><a href="#"><span>个人主页</span></a></li>
                        <li className="treeview">
                            <a href="#"><span>其他文件</span> <i className="fa fa-angle-left pull-right"></i></a>
                            <ul className="treeview-menu">
                                <li><a href="#">简历</a></li>
                                <li><a href="#">文件下载</a></li>
                            </ul>
                        </li>
                        <li><a href="/login.page"><span>退出</span></a></li>
                    </ul>

                </div>
            </div>
        );
    }
});

module.exports = connect(state => ({
    User: state.componentsReducer.User
}), dispatch => ({}))(SidebarLayout);
