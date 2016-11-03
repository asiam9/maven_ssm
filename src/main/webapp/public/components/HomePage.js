/**
 * Created by houdong on 16/8/26.
 */

var React = require('react');
import * as ItemsActions from 'Actions';
import {bindActionCreators} from 'redux';
import {connect} from 'react-redux';
import {UserRoute} from "UserRoute";
import Api from "Api";
import CommonFun from "CommonFun";
import {replace, goBack, push} from 'redux-router';
var initialParams = require('InitialProps').UserList;
var classNames = require('classnames');
var HeaderLayout = require('HeaderLayout');
var SidebarLayout = require('SidebarLayout');

var HomePage = React.createClass({

    mixins: [Api,CommonFun],

    /******************************************************************************
     * life cycle functions
     ******************************************************************************/
    getDefaultProps: function () {
        return {
            UserList: initialParams
        }
    },
    getInitialState: function () {
        return {
            UserList: initialParams,
            pageNow: 1,
            pageSize: 10,
            count: 0,
            pageList: [],
            index: 1,
            disabled_p: true,
            disabled_n: false
        }
    },
    componentWillMount: function () {
        this.handleRefresh();
    },

    /******************************************************************************
     * event handlers
     ******************************************************************************/
    handleChangePageSize: function (event) {
        this.setState({
            pageSize: event.target.value,
            pageNow: 1,
            index: 1
        }, () => this.handleRefresh());
    },
    handleRefresh: function () {
        let self = this;
        let param = {
            pageNow: parseInt(self.state.pageNow),
            pageSize: parseInt(self.state.pageSize)
        };
        this.selectUserListByPageAPI(param, function (data) {
            let pageNum = parseInt(data.count / (self.state.pageSize)) + 1;
            let array = [];
            for (let i = 0; i < pageNum; i++) {
                let object = {};
                object.pageNow = i + 1;
                array.push(object);
            }
            self.setState({
                UserList: data.list,
                count: data.count,
                pageList: array
            });
        }, function (error) {
            alert(error);
        });
    },
    handleClickSelectPage: function (event) {
        this.setState({
            pageNow: parseInt(event.target.dataset.id),
            index: parseInt(event.target.dataset.id)
        }, function () {
            this.handleRefresh();
        });
    },
    handleClickSelectMember: function () {
        let self = this;
        if (this.refs.name.value == '') {
            alert('请输入姓名进行查询!');
        } else {
            let param = {
                name: this.refs.name.value
            };
            this.selectUserByIdAPI(param, function (data) {
                let pageNum = parseInt(data.count / (self.state.pageSize)) + 1;
                let array = [];
                for (let i = 0; i < pageNum; i++) {
                    let object = {};
                    object.pageNow = i + 1;
                    array.push(object);
                }
                self.setState({
                    UserList: data.list,
                    count: data.count,
                    index: 1,
                    pageNow: 1,
                    pageList: array
                });
            }, function (error) {
                alert(error);
            });
        }
    },
    handleClickPreviousPage: function () {
        if ('1' != this.state.pageNow) {
            this.setState({
                pageNow: this.state.pageNow - 1,
                index: this.state.index - 1,
                disabled_p: false
            }, function () {
                this.handleRefresh();
            });
        } else {
            this.setState({
                disabled_p: true,
                disabled_n: false
            });
        }
    },
    handleClickNextPage: function () {
        let pageNum = parseInt(this.state.count / (this.state.pageSize)) + 1;
        if (pageNum != parseInt(this.state.pageNow)) {
            this.setState({
                pageNow: this.state.pageNow + 1,
                index: this.state.index + 1,
                disabled_n: false
            }, function () {
                this.handleRefresh();
            });
        } else {
            this.setState({
                disabled_n: true,
                disabled_p: false
            });
        }
    },

    /******************************************************************************
     * render functions
     ******************************************************************************/
    render: function () {
        let list = this.state.UserList.map((e, i) => {
            return (
                <tr role="row" className="odd" key={i}>
                    <td className="sorting_1">{e.name}</td>
                    <td>{e.gender}</td>
                    <td>{e.age}</td>
                    <td>{e.position}</td>
                    <td>{this.dateTransform(e.date.time)}</td>
                </tr>
            )
        });
        let className_p = classNames(
            'paginate_button previous', {'disabled': this.state.disabled_p});
        let previousPage = (
            <li className={className_p} id="example2_previous">
                <span onClick={this.handleClickPreviousPage}>上一页</span>
            </li>
        );
        let page = this.state.pageList.map((e, i) => {
            let className = classNames(
                'paginate_button', {'active': this.state.index == (i + 1)});
            return (
                <li className={className} key={i}><span data-id={e.pageNow}
                                                        onClick={this.handleClickSelectPage}>{e.pageNow}</span></li>
            )
        });
        let className_n = classNames(
            'paginate_button next', {'disabled': this.state.disabled_n});
        let nextPage = (
            <li className={className_n} id="example2_next">
                <span onClick={this.handleClickNextPage}>下一页</span>
            </li>
        );
        let styleObject = {
            marginLeft: '20px',
            border: '1px solid #605CA8',
            backgroundColor: '#605CA8',
            borderRadius: '5px',
            fontSize: '12px',
            width: '30px',
            height: '20px',
            textAlign: 'center',
            lineHeight: '20px',
            color: '#ffffff'
        };
        return (
            <div>
                <HeaderLayout></HeaderLayout>
                <SidebarLayout></SidebarLayout>
                <div className="content-wrapper">
                    <section className="content">
                        <div className="row">
                            <div className="col-sm-6">
                                <div className="dataTables_length" id="example1_length">
                                    每页显示:&nbsp;&nbsp;
                                    <label>
                                        <select name="example1_length" className="form-control input-sm"
                                                onChange={this.handleChangePageSize}>
                                            <option value="10">10</option>
                                            <option value="20">20</option>
                                            <option value="30">30</option>
                                        </select>
                                    </label>
                                </div>
                            </div>
                            <div className="col-sm-6">
                                <div id="example1_filter" className="dataTables_filter">
                                    <label>
                                        <input type="search" className="form-control input-sm" placeholder="请输入姓名"
                                               ref="name"/>
                                    </label>
                                    <label style={styleObject} onClick={this.handleClickSelectMember}>查询</label>
                                </div>
                            </div>
                        </div>
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
                                                            <th className="sorting">入职日期</th>
                                                        </tr>
                                                        </thead>
                                                        <tbody>{list}</tbody>
                                                    </table>
                                                </div>
                                            </div>
                                            <div className="row">
                                                <div className="col-sm-5">
                                                    <div className="dataTables_info" id="example2_info" role="status">
                                                        第<span
                                                        style={{color: 'red'}}>{this.state.pageNow}</span>页,共<span
                                                        style={{color: 'red'}}>{this.state.count}</span>条数据
                                                    </div>
                                                </div>
                                                <div className="col-sm-7">
                                                    <div className="dataTables_paginate paging_simple_numbers"
                                                         id="example2_paginate">
                                                        <ul className="pagination">
                                                            {previousPage}{page}{nextPage}
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