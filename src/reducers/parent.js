import * as Types from './../constants/ActionTypes';
var initialState = {};
const parent = (state = initialState, actions) => {
    switch (actions.type) {
        
        case Types.GET_PARENT_CLASS:
            return actions.parent;  
        default:
            return state;
    }
}
export default parent;