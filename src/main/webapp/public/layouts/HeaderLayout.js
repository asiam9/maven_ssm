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
                <a href="javascript:void(0);" className="logo">
                    <span className="logo-lg"><b>H5</b>管理后台</span>
                </a>
                <nav className="navbar navbar-static-top" role="navigation">
                    <div className="navbar-custom-menu">
                        <ul className="nav navbar-nav">
                            <li className="dropdown user user-menu">
                                <a href="#" className="dropdown-toggle">
                                    <div
                                        className="hd-user-image">{this.props.User.name.substring(0, 1)}</div>
                                    <span className="hidden-xs">{this.props.User.name}</span>
                                </a>
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
