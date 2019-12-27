import * as Types from "./../constants/ActionTypes";

var initialState = {};

const classSuggest = (state = initialState, action) => {
  switch (action.type) {
    case Types.FETCH_CLASS_SUGGEST:
      state = action.classesSuggest.result;
      return {...state};
    default:
      return state;
  }
};
export default classSuggest;
