import * as ActionTypes from '../actions/actions';

const initialState = {
    id: 0,
    name: '',
    birthDate: '',
    email: '',
    password: '',
    phoneNumber: 0,
    sectionId: 0,
    roleId: 0,
    photo: {},
    emailCode: '',
    admin: false
}

export default userReducer = (state = initialState, action) => {

    switch(action.type) {
        
        case ActionTypes.ADD_USER: 
            return action.payload;

        default:
            return state;

    }
}
