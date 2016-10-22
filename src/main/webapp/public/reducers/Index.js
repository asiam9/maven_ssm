import { combineReducers } from 'redux'
import componentsReducer from './ComponentsReducer'
import {routerStateReducer} from 'redux-router';

const rootReducer = combineReducers({
    componentsReducer,
    router: routerStateReducer
});

export default rootReducer
