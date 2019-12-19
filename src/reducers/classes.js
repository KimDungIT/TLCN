import * as Types from './../constants/ActionTypes';

var initialState = [];
var findIndex = (classes, id) => {
    var result = -1;
    classes.forEach((classitem, index) => {
        if (classitem.idClass === id) {
            result = index;
        }
    });
    return result;
};

const classes = (state = initialState, actions) => {
    var index = -1;
    var { idClass, classs } = actions;
    switch (actions.type) {
        case Types.FETCH_CLASSES:
            state = actions.classes;
            return [...state];
        case Types.FETCH_CLASSES_PENDING:
            state = actions.classes;
            return [...state];
        case Types.DELETE_CLASS:
            index = findIndex(state, idClass);
            state.splice(index, 1);
            return [...state];
        case Types.ADD_CLASS:
            state.push(actions.classs);
            return [...state];
        case Types.UPDATE_CLASS:
            index = findIndex(state, classs.idClass);
            state[index] = classs;
            return [...state];
        default:
            return [...state];
    }
}
export default classes;