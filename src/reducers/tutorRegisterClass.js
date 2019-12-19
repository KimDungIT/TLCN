import * as Types from './../constants/ActionTypes';
var initialState = [];

var findIndex = (classRegister, idClassRegister) => {
      var result = -1;
      classRegister.forEach((classRegister, index) => {
            if(classRegister.idClassRegister  === idClassRegister) {
                  result = index;
            }
      });
      return result;
}

const tutorRegisterClass = (state = initialState, action) => {
      var index = -1;
      var {idClassRegister} = action;
      switch(action.type){
            case Types.FETCH_TUTOR_REGISTER_CLASS:
                  state = action.classRegister.result;
                  return [...state];
            case Types.TUTOR_REGISTER_CLASS:
                  state.push(action.classRegisterInfo.result);
                  return [...state];
            case Types.FETCH_CLASS_TUTOR_REGISTER:
                  state = action.classRegister.result;
                  return [...state];
            case Types.DELETE_CLASS_REGISTER:
                  index = findIndex(state, idClassRegister);
                  state.splice(index, 1);
                  return [...state];
            default: return [...state];
      }
}

export default tutorRegisterClass;
