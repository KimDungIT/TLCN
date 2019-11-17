import * as Types from './../constants/ActionTypes';
var initialState = {};

const tutor = (state = initialState, action) => {
      switch(action.type)
      {
            case Types.ADD_TUTOR:
                  state = action.tutor.result;
                  return {
                        ...state,
                  }
            case Types.FETCH_TUTOR:
                  state = action.tutor.result;
                  return {
                        ...state,
                  }
            default: return state;
      }
};

export default tutor;