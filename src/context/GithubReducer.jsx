const githubReducer = (state, action) => {
    switch (action.type){
        case 'GET_USERS':
            return {
                ...state,
                users:action.payload,
            }
        case 'GET_USER':
            return {
                ...state,
                user:action.payload
            }
        case 'GET_REPOS':
            return {
                ...state,
                repos:action.payload
            }
        case 'DELETE_USERS':
            return {
                ...state,
                users:[],
            }
        default:
            return state
    }

}
//Figure out what the spread operstion is for 


export default githubReducer