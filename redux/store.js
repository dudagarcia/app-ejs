import { applyMiddleware, combineReducers, createStore } from '@reduxjs/toolkit';
import userReducer from './reducers/userReducer';
import allUsersReducer from './reducers/usersReducer';
import thunk from 'redux-thunk';

export default createStore(

        combineReducers({
            user: userReducer,
            users: allUsersReducer
        }), applyMiddleware(thunk)

);