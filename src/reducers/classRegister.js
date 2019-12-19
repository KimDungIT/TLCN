import * as Types from './../constants/ActionTypes';

var initialState = [];
// var findIndex = (classRegister, id) => {
//     var result = -1;
//     classRegister.forEach((classitem, index) => {
//         if (classitem.idClassRegister === id) {
//             result = index;
//         }
//     });
//     return result;
// };

const classRegister = (state = initialState, actions) => {
    //var index = -1;
    //var { idClassRegister, classRegister } = actions;
    switch (actions.type) {
        case Types.FETCH_CLASSES_REGISTER:
            state = actions.classRegister;
            return [...state];
        
        default:
            return [...state];
    }
}
export default classRegister;