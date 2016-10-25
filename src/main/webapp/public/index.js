/**
 * Created by houdong on 16/8/25.
 */

import React from "react";
import {render} from "react-dom";
import {Router, Route, browserHistory} from "react-router";
import {UserRoute} from "UserRoute";
import {compose, createStore} from "redux";
import {Provider} from "react-redux";
import {reduxReactRouter, ReduxRouter} from "redux-router";
import rootReducer from "./reducers/index";
import {createHistory} from "history";


var Login = require('./components/User/Login'),
    Test = require('./components/Test'),
    HomePage = require('./components/HomePage');

/******************************************************************************
 router
 ******************************************************************************/

let routes = (
    <Router history={browserHistory}>
        <Route path='/' component={Login}/>
        <Route path={UserRoute.Login} component={Login}/>
        <Route path={UserRoute.Test} component={Test}/>
        <Route path={UserRoute.HomePage} component={HomePage}/>
        <Route path="*" component={Login}/>
    </Router>
);


/******************************************************************************
 bind redux
 ******************************************************************************/

const store = compose(
    reduxReactRouter({
        routes,
        createHistory
    }))(createStore)(rootReducer);


let app = (<div>
    <Provider store={store}>
        <ReduxRouter routes={routes}/>
    </Provider>
</div>);

render(app, document.getElementById('app'));