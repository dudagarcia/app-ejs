import * as ActionTypes from '../actions/actions';

const initialState = [];

export default allUsersReducer = (state = initialState, action) => {

    switch(action.type) {

        case ActionTypes.ADD_ALL_USER: 
            return { ...state, allUsers: action.payload.allUsers, mySection: action.payload.mySection };

        default:
            return state;

    }
}