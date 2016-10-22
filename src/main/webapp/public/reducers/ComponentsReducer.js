import { SET_COMPONENTS_STATE } from '../constants/ActionType';
const objectAssign = require('object-assign');
export default function items(state = {}, action) {
    switch(action.type) {
        case SET_COMPONENTS_STATE:
            return objectAssign({}, state,action.params);
        default:
            return state
    }
}
