import * as Types from './../constants/ActionTypes';


const AuthReducer = (state = {}, actions) => {
    switch (actions.type) {
        case Types.SET_LOGIN:
            return { ...state, loggedIn: true, user: actions.payload };
        case Types.SET_LOGOUT:
            return { ...state, loggedIn: false, user: {} };

        default:
            return state;
    }
}

export default AuthReducer;