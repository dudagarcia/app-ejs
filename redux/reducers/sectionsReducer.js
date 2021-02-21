import * as ActionTypes from '../actions/actions';

const initialState = {
    id: 0,
    name: '',
    manager: 0
}

export default sectionsReducer = (state = initialState, action) => {

    switch(action.type) {
        
        case ActionTypes.ADD_SECTIONS: 
            return action.payload;
            
        default:
            return state;

    }
}