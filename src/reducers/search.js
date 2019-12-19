import * as Types from "./../constants/ActionTypes";

var initialState = {};

const search = (state = initialState, action) => {
  switch (action.type) {
    case Types.SEARCH:
      state = action.classes.result;
      return { ...state };
    default:
      return state;
  }
};
export default search;
