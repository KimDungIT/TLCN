import * as Types from './../constants/ActionTypes';
var initialState = {};

const image = (state = initialState, action) => {
    switch(action.type){
        case Types.FETCH_IMAGE:
            state = action.image.result;
            return {
                ...state,
            };
        default: return state;
    }
};

export default image;