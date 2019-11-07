import { combineReducers } from 'redux';
import classes from './classes';
import image from './image';
import auth from './auth';

const appReducers = combineReducers ({
    classes,
    image,
    auth
});

export default appReducers;