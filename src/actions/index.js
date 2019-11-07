import * as Types from './../constants/ActionTypes';
import callApi from '../utils/apiCaller';
import { notification } from 'antd';
import setAuthorization from './../utils/setAuthorizationToken';
import jwtDecode from 'jwt-decode';

export const actUploadImageRequest = (fileImage) => {
    return (dispatch) => {
        return callApi('api/tutors/uploadImage', 'POST', {
            file: fileImage
        }).then(res => {
            dispatch(actUploadImage(res.data));
            notification.success({
                message: 'Success',
                description: 'Upload successfully!'
            })
        }).catch(error => {
            notification.error({
                message: 'Error Upload',
                description: error.message
            });   
        })
    }
}
export const actUploadImage = (image) => {
    return {
        type: Types.UPLOAD_IMAGE,
        image
    }
}
export const actAddClassRequest = (classes, history) =>{
    return (dispatch) =>{
        var salary = classes.salary;
        console.log(salary);
        return callApi('api/classes/createClass', 'POST', {
            grade: classes.grade,
            subject: classes.subjects,
            timeTeach: classes.time,
            address: classes.address,
            salary: parseFloat(salary),
            serviceFee: 0.25,
            genderRequirement: classes.requireGender,
            levelRequirement: classes.requireLevel
        })
        .then(res =>{
            dispatch(actAddClass(res.data));
            history.push('/class-list');
            notification.success({
                message: 'Success',
                description: 'Add class successfully!'
            })
        }).catch(error => {
            notification.error({
                message: 'Error create class',
                description: error.message
            });   
        })
    }
}
export const actAddClass = (classes) =>{
    return {
        type: Types.ADD_CLASSES,
        classes
    }
}
export const actAddTutorRequest = (tutor) =>{
    return (dispatch) => {
        
        return callApi('api/tutors/create', 'POST', {
            gender: tutor.gender,
            yearOfBirth: tutor.yearOfBirth,
            image: tutor.image,
            major: tutor.major,
            college: tutor.college,
            graduationYear: tutor.graduationYear,
            subjects: tutor.subjects,
            classes: tutor.classes,
            districtCanTeach: tutor.districts,
            moreInfo: tutor.moreInfo

        }).then(res => {
            dispatch(actAddTutor(res.data));
            notification.success({
                message: 'Success',
                description: 'Add tutor successfully!'
            })
        }).catch(error => {
            notification.error({
                message: 'Error create tutor',
                description: error.message
            });   
        })
    }
}

export const actAddTutor = (tutor) =>{
    return {
        type: Types.ADD_TUTOR,
        tutor
    }
}
export const logout = () => {
    return(dispatch) => {
        localStorage.removeItem('token');
        setAuthorization(false);
        dispatch(setCurrentUser({}));
    }
}

export const actFetchClassesRequest = () => {
    return (dispatch) => {
        return callApi('api/classes', 'GET', null).then(res => {
            dispatch(actFetchClasses(res.data))
        })
    }
}
export const actFetchClasses = (classes) => {
    return {
        type: Types.FETCH_CLASSES,
        classes
    }
}
export const actLoginRequest = (user, typeAccount, history) => {
    return (dispatch) => {

        let params = {
            username: user.username,
            password: user.password,
            grant_type: "grant_type",
            client_id: "client",
            client_secret: "ttgs123"
        };

        let formData = new FormData();
        formData.append("username",  user.username)
        formData.append("password", user.password)
        formData.append("grant_type", "grant_type")
        formData.append("client_id", "client")
        formData.append("client_secret", "ttgs123")

        return callApi(`oauth/token?username=${user.username}&password=${user.password}&grant_type=password&client_id=client&client_secret=ttgs123`, 'POST'
        // `username=${user.username}&password=${user.password}&grant_type=password&client_id=client&client_secret=ttgs123`,)
        )
        .then(res => {
           
            if(res.data.role === `[${typeAccount}]`){
                const token = res.data.access_token;
                localStorage.setItem("token", token);
                setAuthorization(token);
                dispatch(setCurrentUser(jwtDecode(token)));
                history.push('/');
                notification.success({
                    message: 'Success',
                    description: 'Login successfully!'
                })
            }
            else{
                notification.error({
                    message: 'Error login',
                    description: 'Your Username or Password is incorrect. Please try again!'
                })
            }
            
        }).catch(error => {
            notification.error({
                message: 'Error login',
                description: error.message
            });   
        })
    }
}
export const setCurrentUser = (user) => {
    return{
        type: Types.SET_CURRENT_USER,
        user
    };
}

