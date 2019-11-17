import * as Types from './../constants/ActionTypes';
var initialState = {};

const classRegister = (state = initialState, action) => {
      switch(action.type){
            case Types.CLASS_REGISTER:
                  state = action.classInfo.result;
                  return {
                        ...state
                  }
            default: return state;
      }
};
export default classRegister;