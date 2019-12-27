import { combineReducers } from 'redux';
import classes from './classes';
import auth from './auth';
import user from './user';
import tutor from './tutor';
import classRegister from './classRegister';
import tutorRegisterClass from './tutorRegisterClass';
import classParent from './classParent';
import classSuggest from './classSuggest';
import childClass from './childClass';
import search from './search';
const appReducers = combineReducers ({
    search,
    classSuggest,
    childClass,
    classes,
    classRegister,
    tutorRegisterClass,
    tutor,
    user,
    auth,
    classParent
});

export default appReducers;