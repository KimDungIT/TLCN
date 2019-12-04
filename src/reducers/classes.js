import * as Types from './../constants/ActionTypes';
var initialState = [];

const classes = (state = initialState, action) => {
    switch(action.type){
        case Types.FETCH_CLASSES:
            state = action.classes.result;
            return [...state];
        case Types.FETCH_CLASS_PARENT_REGISTER:
            state = action.classes.result;
            return [...state];
        case Types.ADD_CLASSES:
            state.push(action.classes.result);
            return [...state];

        default: return [...state];
    }
};

export default classes;