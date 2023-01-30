import React, { FC, useEffect } from "react";
import { UseActions } from "../hooks/useActions";
import { useTypedSelector } from "../hooks/useTypedSelector";

const UserList: React.FC = () => {
    const {users, loading, error} = useTypedSelector(state => state.user)
    // const dispatch:any = useDispatch()
    const {fetchUsers} = UseActions()
    useEffect (() => {
        fetchUsers()
    }, [])
    // console.log(users)

    if (loading) {
        return  <h1>loading...</h1>
    }

    if (error) {
        return <h1>error!</h1>
    }

    return(
        <>
            <div>
                @ts-ignore: error message
                {users.map(user => <div key={user.id}>{user.name}</div> )}
            </div>
        </>
    )
}

export default UserList