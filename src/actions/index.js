import * as Types from './../constants/ActionTypes';
import callApi from './../utils/apiCaller';
import { notification } from 'antd';
import 'antd/dist/antd.css';

// get all classes
export const actFetchClassesRequest = () => {
    return (dispatch) => {
        return callApi('classes/all', 'GET', null).then(res => {
            dispatch(actFetchClasses(res.data.result));
        });
    }
}

export const actFetchClasses = (classes) => {
    return {
        type: Types.FETCH_CLASSES,
        classes
    }
}

//get all classes pending
export const actFetchClassesPendingRequest = () => {
    return (dispatch) => {
        return callApi('classes/pending', 'GET', null).then(res => {
            dispatch(actFetchClassesPending(res.data.result));
        });
    }
}

export const actFetchClassesPending = (classes) => {
    return {
        type: Types.FETCH_CLASSES_PENDING,
        classes
    }
}

// delete class
export const actDeleteClassRequest = (id, history) => {
    return dispatch => {
        return callApi(`classes/${id}`, 'DELETE', null).then(res => {
            if (res.data.status === 200) {               
                notification.success({
                    message: "Success",
                    description: "Xóa lớp thành công!"
                });
            }
            else{
                notification.error({
                    message: "Error",
                    description: "Lớp này không thể xóa!"
                });
            }
        });
    }
}
export const actDeleteClass = (id) => {
    return {
        type: Types.DELETE_CLASS,
        id
    }
}

// add class
export const actAddClassRequest = (classs, phoneParent, history) => {
    return dispatch => {
        return callApi(`classes?parentPhoneNumber=${phoneParent}`,
        'POST', classs).then(res => {
            dispatch(actAddClass(res.data.result));
            history.goBack();
            if (res.data.status === 200) {               
                notification.success({
                    message: "Success",
                    description: "Thêm lớp thành công!"
                });
            }
            else{
                notification.error({
                    message: "Error",
                    description: "Thêm lớp thất bại!"
                });
            }
        })
    }
}
export const actAddClass = (classs) =>{
    return {
        type: Types.ADD_CLASS,
        classs
    }
}

// get class to edit
export const actGetClassRequest = (id) => {
    return dispatch => {
        return callApi(`classes/${id}/register`, 'GET', null)
            .then(res => {
                dispatch(actGetClass(res.data.result));
            });
    }
}
export const actGetClass = (classs) => {
    return {
        type: Types.EDIT_CLASS,
        classs
    }
}

// update class
export const actUpdateClassRequest = (classs, history) => {
    return dispatch => {
        callApi('classes', 'PATCH', classs)
        .then(res => {
            dispatch(actUpdateClass(res.data.result));
            history.goBack();
            if (res.data.status === 200) {               
                notification.success({
                    message: "Success",
                    description: "Chỉnh sửa lớp thành công!"
                });
            }
            else{
                notification.error({
                    message: "Error",
                    description: "Sửa lớp thất bại!"
                });
            }
        })
    }
}
export const actUpdateClass = (classs) => {
    return {
        type: Types.UPDATE_CLASS,
        classs
    }
}

// get parent
export const actGetParentClassRequest = (id) => {
    return dispatch => {
        return callApi(`classes/${id}/parent`, 'GET', null)
            .then(res => {
                dispatch(actGetParentClass(res.data.result));
            });
    }
}
export const actGetParentClass = (parent) => {
    return {
        type: Types.GET_PARENT_CLASS,
        parent
    }
}

// get all class register pending
export const actFetchClassRegisterPendingRequest = () => {
    return (dispatch) => {
        return callApi('classRegister/pending', 'GET', null).then(res => {
            dispatch(actFetchClassRegisterPending(res.data.result));
        });
    }
}

export const actFetchClassRegisterPending = (classRegister) => {
    return {
        type: Types.FETCH_CLASSES_REGISTER_PENDING,
        classRegister
    }
}

// get class register detail
export const actGetClassRegisterRequest = (id) => {
    return dispatch => {
        return callApi(`classRegister/${id}`, 'GET', null)
            .then(res => {
                dispatch(actGetClassRegister(res.data.result));
            });
    }
}
export const actGetClassRegister = (classRegisterItem) => {
    return {
        type: Types.GET_CLASS_REGISTER_DETAIL,
        classRegisterItem
    }
}

// update status class register -- pass
export const actUpdateClassRegisterRequest = (idClassRegister) => {
    return dispatch => {
        callApi(`invoices?idClassRegister=${idClassRegister}`, 'PUT', idClassRegister)
        .then(res => {
            dispatch(actUpdateClassRegister(res.data.result));
            if (res.data.status === 200) {               
                notification.success({
                    message: "Success",
                    description: "Duyệt lớp thành công!"
                });
            }
            else{
                notification.error({
                    message: "Error",
                    description: "Thất bại!"
                });
            }
        })
    }
}
export const actUpdateClassRegister = (invoice) => {
    return {
        type: Types.UPDATE_CLASS_REGISTER,
        invoice
    }
}

// get all users
export const actFetchUsersRequest = () => {
    return (dispatch) => {
        return callApi('users', 'GET', null).then(res => {
            dispatch(actFetchUsers(res.data.result));
        });
    }
}

export const actFetchUsers = (users) => {
    return {
        type: Types.FETCH_USERS,
        users
    }
}

// add User
export const actAddUserRequest = (user, role, history) => {
    return dispatch => {
        return callApi(`users/signUp?type=${role}`,
        'POST', user).then(res => {
            dispatch(actAddUser(res.data.result));
            history.goBack();
            if (res.data.status === 200) {               
                notification.success({
                    message: "Success",
                    description: "Thêm user thành công!"
                });
            }
            else{
                notification.error({
                    message: "Error",
                    description: "Thất bại!"
                });
            }
        })
    }
}
export const actAddUser = (user) =>{
    return {
        type: Types.ADD_USER,
        user
    }
}


// get user to edit
export const actGetUserRequest = (id) => {
    return dispatch => {
        return callApi(`users/getUserById?idUser=${id}`, 'GET', null)
            .then(res => {
                dispatch(actGetUser(res.data.result));
            });
    }
}
export const actGetUser = (user) => {
    return {
        type: Types.EDIT_USER,
        user
    }
}


// update user
export const actUpdateUserRequest = (user, history) => {
    return dispatch => {
        callApi('users', 'PATCH', user)
        .then(res => {
            dispatch(actUpdateUser(res.data.result));
            history.goBack();
            if (res.data.status === 200) {               
                notification.success({
                    message: "Success",
                    description: "Sửa user thành công!"
                });
            }
            else{
                notification.error({
                    message: "Error",
                    description: "Thất bại"
                });
            }
        })
    }
}
export const actUpdateUser = (user) => {
    return {
        type: Types.UPDATE_USER,
        user
    }
}

// add tutor
export const actAddTutorRequest = (idUser, dataTutor, history) => {
    return dispatch => {
        return callApi(`tutors/create/?idUser=${idUser}`,
        'POST', dataTutor).then(res => {
            //dispatch(actAddTutor(res.data.result));
            history.goBack();
            
        })
    }
}

// get all invoices
export const actFetchClassRegisterRequest = () => {
    return (dispatch) => {
        return callApi('classRegister', 'GET', null).then(res => {
            dispatch(actFetchClassRegister(res.data.result));
            console.log("classRegister: "+res.data.result);
            
        });
    }
}

export const actFetchClassRegister = (classRegister) => {
    return {
        type: Types.FETCH_CLASSES_REGISTER,
        classRegister
    }
}
