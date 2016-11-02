/**
 * Created by houdong on 16/8/26.
 */

var React = require('react');
import * as ItemsActions from 'Actions';
import {bindActionCreators} from 'redux';
import {connect} from 'react-redux';
import {UserRoute} from "UserRoute";
import Api from "Api";
import {replace, goBack, push} from 'redux-router';
var initialParams = require('InitialProps').UserList;

var HomePage = React.createClass({

    mixins: [Api],

    getDefaultProps: function () {
        return {
            UserList: initialParams
        }
    },
    getInitialState: function () {
        return {
            UserList: initialParams
        }
    },

    componentWillMount: function () {
        let self = this;
        this.selectUserListAPI({}, function (data) {
            self.setState({
                UserList:data
            });
        }, function (error) {
            alert(error);
        });
    },
    render: function () {
        let list = this.state.UserList.map((e, i) => {
            return (
                <tr role="row" className="odd" key={i}>
                    <td className="sorting_1">{e.name}</td>
                    <td>{e.gender}</td>
                    <td>{e.age}</td>
                    <td>{e.position}</td>
                </tr>
            )
        });
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
                                            <div
                                                className="hd-user-image">{this.props.User.name.substring(0, 1)}</div>
                                            <span className="hidden-xs">{this.props.User.name}</span>
                                        </a>
                                    </li>
                                </ul>
                            </div>
                        </nav>
                    </header>
                </div>
                <div className="content-wrapper">
                    <section className="content">
                        <div className="row">
                            <div className="col-xs-12">
                                <div className="box">
                                    <div className="box-header">
                                        <h3 className="box-title">成员管理</h3>
                                    </div>
                                    <div className="box-body">
                                        <div id="example2_wrapper"
                                             className="dataTables_wrapper form-inline dt-bootstrap">
                                            <div className="row">
                                                <div className="col-sm-6"></div>
                                                <div className="col-sm-6"></div>
                                            </div>
                                            <div className="row">
                                                <div className="col-sm-12">
                                                    <table id="example2"
                                                           className="table table-bordered table-hover dataTable"
                                                           role="grid">
                                                        <thead>
                                                        <tr role="row">
                                                            <th className="sorting_asc">姓名</th>
                                                            <th className="sorting">性别</th>
                                                            <th className="sorting">年龄</th>
                                                            <th className="sorting">职位</th>
                                                        </tr>
                                                        </thead>
                                                        <tbody>{list}</tbody>
                                                    </table>
                                                </div>
                                            </div>
                                            <div className="row">
                                                <div className="col-sm-5">
                                                    <div className="dataTables_info" id="example2_info" role="status">
                                                        Showing 1 to 10 of 57 entries
                                                    </div>
                                                </div>
                                                <div className="col-sm-7">
                                                    <div className="dataTables_paginate paging_simple_numbers"
                                                         id="example2_paginate">
                                                        <ul className="pagination">
                                                            <li className="paginate_button previous disabled"
                                                                id="example2_previous">
                                                                <a href="#">上一页</a>
                                                            </li>
                                                            <li className="paginate_button active"><a href="#">1</a>
                                                            </li>
                                                            <li className="paginate_button "><a href="#">2</a></li>
                                                            <li className="paginate_button next" id="example2_next">
                                                                <a href="#">下一页</a>
                                                            </li>
                                                        </ul>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </section>
                </div>
            </div>
        )
    }
});

module.exports = connect(state => ({
    User: state.componentsReducer.User
}), dispatch => ({
    actions: bindActionCreators(ItemsActions, dispatch),
    history: bindActionCreators({replace, goBack, push}, dispatch)
}))(HomePage);