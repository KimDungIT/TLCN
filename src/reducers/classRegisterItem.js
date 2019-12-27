import * as Types from './../constants/ActionTypes';
var initialState = {};

const classRegisterItem = (state = initialState, actions) => {
    switch (actions.type) {
        case Types.GET_CLASS_REGISTER_DETAIL:
            return actions.classRegisterItem;
        
        default:
            return state;
    }
}
export default classRegisterItem;
