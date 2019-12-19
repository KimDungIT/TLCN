import * as Types from "./../constants/ActionTypes";
var initialState = [];
var findIndex = (classes, idClass) => {
    var result = -1;
    classes.forEach((classes, index) => {
        if(classes.idClass === idClass){
            result = index;
        }
    });
    return result;
}

const classParent = (state = initialState, action) => {
  var index = -1;
  var { idClass } = action;
  switch (action.type) {
    case Types.FETCH_CLASS_PARENT_REGISTER:
      state = action.classes.result;
      return [...state];
    case Types.DELETE_CLASS:
      index = findIndex(state, idClass);
      state.splice(index, 1);
      return [...state];
    default:
      return [...state];
  }
};

export default classParent;
