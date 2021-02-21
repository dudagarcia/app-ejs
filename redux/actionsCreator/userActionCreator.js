import * as ActionTypes from '../actions/actions';

export const addLoggedUser = (user) => (
    {
        type: ActionTypes.ADD_USER,
        payload:{
            user: user
        }
    }
);


