import * as ActionTypes from '../actions/actions';


export const addAllUsers = (users, mySection) => (
    {
        type: ActionTypes.ADD_ALL_USER,
        payload: {
            allUsers: users,
            mySection: mySection
        }
    }
);