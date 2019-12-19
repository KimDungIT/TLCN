import { combineReducers } from "redux";
import AuthReducer from "./AuthReducer";
import classes from './classes';
import classEditing from './../reducers/classEditing';
import parent from './../reducers/parent';
import classRegister from './../reducers/classRegister';

const AllReducers = combineReducers({
    auth: AuthReducer,
    classes,
    classEditing,
    parent, 
    classRegister
});

export default AllReducers;