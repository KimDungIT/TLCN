import { combineReducers } from "redux";
import AuthReducer from "./AuthReducer";
import classes from './classes';
import classEditing from './../reducers/classEditing';
import parent from './../reducers/parent';
import classRegister from './../reducers/classRegister';
import classRegisterItem from './../reducers/classRegisterItem';
import users from './../reducers/users';
import userEditing from './../reducers/userEditing';

const AllReducers = combineReducers({
    auth: AuthReducer,
    classes,
    classEditing,
    parent, 
    classRegister,
    classRegisterItem,
    users,
    userEditing
});

export default AllReducers;