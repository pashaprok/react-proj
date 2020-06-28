import * as ActionTypes from './ActionTypes'

export const CommentsDish = (state = {
    errMess: null,
    commentsDish: []
}, action) => {
    switch(action.type) {
        case ActionTypes.ADD_COMMENTSDISH:
            return {...state, isLoading: false, errMess: null, commentsDish: action.payload};

        case ActionTypes.COMMENTSDISH_FAILED:
            return {...state, isLoading: false, errMess: action.payload, commentsDish: []};

        case ActionTypes.ADD_COMMENTDISH:
            var commentDish = action.payload;
            return {...state, commentsDish: state.commentsDish.concat(commentDish)};
        
        default: 
            return state;
    }
}