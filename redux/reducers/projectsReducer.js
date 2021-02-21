import * as ActionTypes from '../actions/actions';

const initialState = {
    id: 0,
    name: '',
    contributors: '',
    status: 0,
    description: ''
}

export default projectsReducer = (state = initialState, action) => {

    switch(action.type) {
        
        case ActionTypes.ADD_PROJECT: 
            return {active: action.payload.active, notActive: action.payload.notActive};
            
        default:
            return state;

    }
}