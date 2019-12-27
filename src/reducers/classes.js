import * as Types from './../constants/ActionTypes';
var initialState = {};

const classes = (state = initialState, action) => {
    switch(action.type){
        case Types.FETCH_CLASSES:
            state = action.classes.result;
            return {...state};
        case Types.SEARCH:
                state = action.classes.result;
                return { ...state };
        case Types.FETCH_CLASSES_BY_CLASS_TEACH:
            state = action.classes.result;
            return {...state};
        default: return state;
    }
};

export default classes;