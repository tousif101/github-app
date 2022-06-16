import {createContext, useReducer} from 'react'
import axios from 'axios'
import githubReducer from './GithubReducer'

// create the context
const GithubContext = createContext()

export const GithubProvider = ({children}) => {
    //empty state 
    // const [users,setUsers] = useState([])
    //You have to decide as a developer when to use which


    const initialState = {
        users:[],
        user:{},
        repos:[]
    }

    const [state,dispatch] = useReducer(githubReducer,initialState)

    //TODO. MAke a elete user function 
    const deleteUserState = () => {
        dispatch({
            type:'DELETE_USERS'
        })
    }

    const getUser = (username) => {
        axios.get(`https://api.github.com/users/${username}`)
        .then(function (response) {
            console.log(response);
            //Do if check here on the response. 
            dispatch({
                type:'GET_USER',
                payload: response.data
            })
        })
        .catch(function (error) {
            console.log(error);
    }); 

    }


    const getRepos = (username) => {
        axios.get(`https://api.github.com/users/${username}/repos`)
        .then(function (response) {
            console.log(response);
            //Do if check here on the response. 
            dispatch({
                type:'GET_REPOS',
                payload: response.data
            })
        })
        .catch(function (error) {
            console.log(error);
    }); 

    }







    const fetchUsers = (text) => {
        axios.get(`https://api.github.com/search/users?q=${text}`)
            .then(function (response) {
                console.log(response);
                dispatch({
                    type:'GET_USERS',
                    payload: response.data.items
                })
            })
            .catch(function (error) {
                console.log(error);
        });
        
    }

    return (
        <GithubContext.Provider
            value={{
                deleteUserState,
                fetchUsers,
                getUser,
                getRepos,
                user: state.user,
                users: state.users,
                repos : state.repos
            }}
        >
            {children}
        </GithubContext.Provider>
    )
}

export default GithubContext