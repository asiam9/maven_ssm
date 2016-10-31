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
import persistState from 'redux-localstorage';


var Login = require('./components/User/Login'),
    HomePage = require('./components/HomePage');

/******************************************************************************
 router
 ******************************************************************************/

let routes = (
    <Router history={browserHistory}>
        <Route path='/' component={Login}/>
        <Route path={UserRoute.Login} component={Login}/>
        <Route path={UserRoute.HomePage} component={HomePage}/>
        <Route path="*" component={Login}/>
    </Router>
);


/******************************************************************************
 bind redux
 ******************************************************************************/
const enhancer = persistState();
const store = compose(
    reduxReactRouter({
        routes,
        createHistory
    }))(createStore)(rootReducer,enhancer);


let app = (<div>
    <Provider store={store}>
        <ReduxRouter routes={routes}/>
    </Provider>
</div>);

render(app, document.getElementById('app'));