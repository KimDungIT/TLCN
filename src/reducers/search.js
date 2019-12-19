import * as Types from './../constants/ActionTypes';

var initialState = {
  keywordIdClass: '',
  keywordClass: '',
  keywordSubject: '',
  keywordDistrict: ''
}

const search = (state = initialState, action) => {
      switch (action.type) {
        case Types.SEARCH:
          return {
            keywordIdClass: action.search.keywordIdClass,
            keywordClass: action.search.keywordClass,
            keywordSubject: action.search.keywordSubject,
            keywordDistrict: action.search.keywordDistrict
          };
        default:
          return state;
      }
    };
    
    export default search;