import { applyMiddleware, combineReducers, createStore } from '@reduxjs/toolkit';
import userReducer from './reducers/userReducer';
import allUsersReducer from './reducers/usersReducer';
import sectionsReducer from './reducers/sectionsReducer';
import projectsReducer from './reducers/projectsReducer';
import thunk from 'redux-thunk';

export default createStore(

    combineReducers({
        user: userReducer,
        users: allUsersReducer,
        sections: sectionsReducer,
        projects: projectsReducer

    }), applyMiddleware(thunk)

);