import * as ActionTypes from '../actions/actions';

export const addProject = (activeProjects, notActiveProjects) => (
    {
        type: ActionTypes.ADD_SECTIONS,
        payload:{
            projects: {
                active: activeProjects,
                notActive: notActiveProjects
            }
        }
    }
);
