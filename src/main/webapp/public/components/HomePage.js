/**
 * Created by houdong on 16/8/26.
 */

var React = require('react');
import * as ItemsActions from 'Actions';
import {bindActionCreators} from 'redux';
import {connect} from 'react-redux';
import {UserRoute} from "UserRoute";
import {replace, goBack, push} from 'redux-router';

var HomePage = React.createClass({

    render: function () {
        return (
            <div className="skin-blue sidebar-mini">
                <div className="wrapper">
                    <header className="main-header">
                        <a href="javascript:void(0);" className="logo">
                            <span className="logo-lg"><b>H5</b>管理后台</span>
                        </a>
                        <nav className="navbar navbar-static-top" role="navigation">
                            <div className="navbar-custom-menu">
                                <ul className="nav navbar-nav">
                                    <li className="dropdown user user-menu">
                                        <a href="#" className="dropdown-toggle">
                                            <img src="public/build/images/user2-160x160.jpg" className="user-image" alt="User Image" />
                                                <span className="hidden-xs"></span>
                                        </a>
                                    </li>
                                </ul>
                            </div>
                        </nav>
                    </header>
                </div>
            </div>
        )
    }
});

module.exports = connect(state => ({
    Login: state.componentsReducer.Login
}), dispatch => ({
    actions: bindActionCreators(ItemsActions, dispatch),
    history: bindActionCreators({replace, goBack, push}, dispatch)
}))(HomePage);