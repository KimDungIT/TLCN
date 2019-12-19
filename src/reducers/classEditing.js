import * as Types from './../constants/ActionTypes';
var initialState = {};

const classEditing = (state = initialState, actions) => {
    switch (actions.type) {
        case Types.EDIT_CLASS:
            return actions.classs;
        
        default:
            return state;
    }
}
export default classEditing;

