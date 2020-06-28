import { createStore, combineReducers, applyMiddleware } from 'redux'
import { createForms } from 'react-redux-form'
import { Dishes } from './dishes'
import { Rooms } from './rooms'
import { Workers } from './workers'
import { Photos } from './photos'
import { Companies } from './companies'
import { Contacts } from './contacts'
import { CommentsDish } from './commentsDish'
import { CommentsRoom } from './commentsRoom'
import thunk from 'redux-thunk'
import logger from 'redux-logger'
import { InitialFeedback, InitialReserve } from './forms'

export const ConfigureStore = () => {
    const store = createStore(
        combineReducers({
            dishes: Dishes,
            commentsDish: CommentsDish,
            rooms: Rooms,
            commentsRoom: CommentsRoom,
            workers: Workers,
            photos: Photos,
            companies: Companies,
            contacts: Contacts,
            ...createForms({
                reserve: InitialReserve,
                feedback: InitialFeedback
            })
        }),
        applyMiddleware(thunk, logger)
    );

    return store;
}