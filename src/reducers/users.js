import * as Types from './../constants/ActionTypes';

var initialState = [];
// var findIndex = (classes, id) => {
//     var result = -1;
//     classes.forEach((classitem, index) => {
//         if (classitem.idClass === id) {
//             result = index;
//         }
//     });
//     return result;
// };

const users = (state = initialState, actions) => {
    var index = -1;
    var { idUser, users } = actions;
    switch (actions.type) {
        case Types.FETCH_USERS:
            state = actions.users;
            return [...state];
     
        default:
            return [...state];
    }
}
export default users;