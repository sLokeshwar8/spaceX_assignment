export const GET_ALL_PROJECTS = 'GET_ALL_PROJECTS';
export const GET_LAUNCH_SUCCESS = 'GET_LAUNCH_SUCCESS';
export const GET_LAUNCH_YEAR = 'GET_LAUNCH_YEAR';


export const storeAllprojects = (res) => {
    return {
        type: GET_ALL_PROJECTS,
        projects: res
    }
}


export const allProjects = () => {
    return dispatch => {
        fetch('https://api.spaceXdata.com/v3/launches?limit=20')
        .then(response => {
            return response.json()
        }).then(responseData => {
            dispatch(storeAllprojects(responseData))
        });
    }
}


export const launchSuccess = (isSuccess, year) => {
    let url = '';
    console.log(isSuccess, year)
    if(isSuccess !== undefined && year) {
        url = 'https://api.spaceXdata.com/v3/launches?limit=100&launch_success='+isSuccess+'&launch_year='+year;
    }else {
        if(isSuccess) {
            url = 'https://api.spaceXdata.com/v3/launches?limit=100&launch_success='+isSuccess;
        }else if(year) {
            url = 'https://api.spaceXdata.com/v3/launches?limit=100&launch_year='+year;
        }else {
            url = 'https://api.spaceXdata.com/v3/launches?limit=100';
        }
    }
    return dispatch => {
        fetch(url)
        .then(response => {
            return response.json()
        }).then(responseData => {
            dispatch(storeAllprojects(responseData))
        });
    }
}