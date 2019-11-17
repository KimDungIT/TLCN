import { combineReducers } from 'redux';
import classes from './classes';
import auth from './auth';
import user from './user';
import tutor from './tutor';
import classRegister from './classRegister';
import tutorRegisterClass from './tutorRegisterClass';

const appReducers = combineReducers ({
    classes,
    classRegister,
    tutorRegisterClass,
    //tutor,
    user,
    auth
});

export default appReducers;