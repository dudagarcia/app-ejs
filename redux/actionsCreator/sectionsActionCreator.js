import * as ActionTypes from '../actions/actions';

export const addSections = (sections) => (
    {
        type: ActionTypes.ADD_SECTIONS,
        payload:{
            sections: sections
        }
    }
);
