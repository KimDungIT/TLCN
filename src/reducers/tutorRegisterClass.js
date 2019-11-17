import * as Types from './../constants/ActionTypes';
var initialState = [];

const tutorRegisterClass = (state = initialState, action) => {
      switch(action.type){
            case Types.FETCH_TUTOR_REGISTER_CLASS:
                  state = action.classRegister.result;
                  return [...state];
            case Types.TUTOR_REGISTER_CLASS:
                  state.push(action.classRegisterInfo.result);
                  return [...state];
            default: return [...state];
      }
}

export default tutorRegisterClass;
