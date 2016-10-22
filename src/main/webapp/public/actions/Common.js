import { SET_COMPONENTS_STATE } from '../constants/ActionType'

export function changeComponentsState(params) {
    return {
        type: SET_COMPONENTS_STATE,
        params: params
    }
}