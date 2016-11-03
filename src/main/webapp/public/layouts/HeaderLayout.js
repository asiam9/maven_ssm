/**
 * Created by houdong on 16/11/3.
 */

var React = require('react');
import {bindActionCreators} from "redux";
import {connect} from "react-redux";
var initialParams = require('InitialProps').User;
var HeaderLayout = React.createClass({

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
            <header className="main-header">
                <span  className="logo">H5管理后台</span>
                <nav className="navbar navbar-static-top" role="navigation">
                    <a href="#" className="sidebar-toggle" data-toggle="offcanvas" role="button">
                        <span className="sr-only">Toggle navigation</span>
                    </a>
                    <div className="navbar-custom-menu">
                        <ul className="nav navbar-nav">
                            <li className="dropdown user user-menu">
                                <a href="#" className="dropdown-toggle" data-toggle="dropdown">
                                    <img src="public/build/images/user2-160x160.jpg" className="user-image" alt="User Image" />
                                        <span className="hidden-xs">{this.props.User.name}</span>
                                </a>
                                <ul className="dropdown-menu">
                                    <li className="user-header">
                                        <img src="public/build/images/user2-160x160.jpg" className="img-circle" alt="User Image" />
                                            <p>
                                                {this.props.User.name} - {this.props.User.position}
                                                <small>{this.props.User.date}入职</small>
                                            </p>
                                    </li>
                                    <li className="user-footer">
                                        <div className="pull-left">
                                            <a href="#" className="btn btn-default btn-flat">个人主页</a>
                                        </div>
                                        <div className="pull-right">
                                            <a href="/login.page" className="btn btn-default btn-flat">退出</a>
                                        </div>
                                    </li>
                                </ul>
                            </li>
                        </ul>
                    </div>
                </nav>
            </header>
        );
    }
});

module.exports = connect(state => ({
    User: state.componentsReducer.User
}), dispatch => ({

}))(HeaderLayout);
