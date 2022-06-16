import { useContext} from "react";
import UserItem from "./UserItem";
import GithubContext from "../context/GithubContext";


function UserResults (){


    const { users } = useContext(GithubContext)

    /*
    Notes:
        Context, makes the react app components alot cleaner 
        Global context

    TODO:
        - revist the styling that is used in the app 


    */

    return(
        <div className="grid grid-cols=1 gap-8 xl:grid-cols-4 lg:grid-cols-3 md:grid-cols-2">
            {
            users.map((user)=> (
                <UserItem key={user.id} user={user} />
            ))
            }
        </div>
    )
}

export default UserResults;