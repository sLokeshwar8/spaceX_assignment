import * as actionType from './actions';
const intialize = {
    project_list : null,
}   

const reducer = (state, action) =>{
    switch(action.type) {
        case actionType.GET_ALL_PROJECTS : 
            return {
                ...state,
                project_list: action.projects,
            }
        case actionType.GET_LAUNCH_SUCCESS : 
            return {
                ...state,
                project_list: action.sucssLaun,
            }
        default :
            return {
                state
            }
    }
}


export default reducer