import * as Types from './../constants/ActionTypes';
var initialState = {};

const userEditing = (state = initialState, actions) => {
    switch (actions.type) {
        case Types.EDIT_USER:
            return actions.user;
        
        default:
            return state;
    }
}
export default userEditing;