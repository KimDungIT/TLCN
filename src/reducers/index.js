import { combineReducers } from 'redux';
import classes from './classes';
// import user from './user';
import auth from './auth';

const appReducers = combineReducers ({
    classes,
    // user,
    auth
});

export default appReducers;