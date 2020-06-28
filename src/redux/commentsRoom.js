import * as ActionTypes from './ActionTypes'

export const CommentsRoom = (state = {
    errMess: null,
    commentsRoom: []
}, action) => {
    switch(action.type) {
        case ActionTypes.ADD_COMMENTSROOM:
            return {...state, isLoading: false, errMess: null, commentsRoom: action.payload};

        case ActionTypes.COMMENTSROOM_FAILED:
            return {...state, isLoading: false, errMess: action.payload, commentsRoom: []};

        case ActionTypes.ADD_COMMENTROOM:
            var commentRoom = action.payload;
            return {...state, commentsDish: state.commentsRoom.concat(commentRoom)};
        
        default: 
            return state;
    }
}