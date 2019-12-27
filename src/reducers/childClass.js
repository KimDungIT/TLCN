import * as Types from './../constants/ActionTypes';
var initialState = [];

const childClass = (state = initialState, action) => {
    switch(action.type){
        case Types.TOP_SIX_CLASSES:
            state = action.info.result;
            return [...state];
        default: return [...state];
    }
};

export default childClass;