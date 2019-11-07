import * as Types from './../constants/ActionTypes';
var initialState = [];

const image = (state = initialState, action) => {
    switch(action.type){
        case Types.UPLOAD_IMAGE:
            state = action.image;
            return [...state];
        default: return [...state];
    }
};

export default image;