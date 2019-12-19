import * as Types from './../constants/ActionTypes';
import callApi from './../utils/apiCaller';

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
export const actDeleteClassRequest = (id) => {
    return dispatch => {
        return callApi(`classes/${id}`, 'DELETE', null).then(res => {
            dispatch(actDeleteClass(id));
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
export const actAddClassRequest = (classs, phoneParent) => {
    return dispatch => {
        return callApi(`classes?parentPhoneNumber=${phoneParent}`,
        'POST', classs).then(res => {
            console.log(res);
            dispatch(actAddClass(res.data.result));
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
export const actUpdateClassRequest = (classs) => {
    return dispatch => {
        callApi('classes', 'PATCH', classs)
        .then(res => {
            dispatch(actUpdateClass(res.data.result));
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
                console.log(res);
            });
    }
}
export const actGetParentClass = (parent) => {
    return {
        type: Types.GET_PARENT_CLASS,
        parent
    }
}

// get all class register
export const actFetchClassRegisterRequest = () => {
    return (dispatch) => {
        return callApi('classRegister', 'GET', null).then(res => {
            dispatch(actFetchClassRegister(res.data.result));
        });
    }
}

export const actFetchClassRegister = (classRegister) => {
    return {
        type: Types.FETCH_CLASSES_REGISTER,
        classRegister
    }
}