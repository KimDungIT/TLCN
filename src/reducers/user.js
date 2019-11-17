import * as Types from './../constants/ActionTypes';
var initialState = {};

const user = (state = initialState, action) => {
      switch(action.type){
            case Types.FETCH_USER:
                  state = action.infoUser.result;
                  return {
                        ...state,
                  }
            default: return state;
      }
};
export default user;