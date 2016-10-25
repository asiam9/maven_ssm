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
            <div>
                123
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