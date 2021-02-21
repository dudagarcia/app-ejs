import { applyMiddleware, combineReducers, createStore } from '@reduxjs/toolkit';
import userReducer from './reducers/userReducer';
import thunk from 'redux-thunk';

export default createStore(

        combineReducers({
            user: userReducer
        }), applyMiddleware(thunk)

);