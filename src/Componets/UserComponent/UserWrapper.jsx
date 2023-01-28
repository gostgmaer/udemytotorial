import React from 'react'
import { useUserContext } from './userContext'
import UserFrom from './UserFrom'
import UserListItem from './UserListItem'

const UserWrapper = () => {
    const { users, setUsers, isOpen, setIsOpen } = useUserContext()
    return (
        <div className="userWrapper">
            <UserFrom></UserFrom>
            {users.length !== 0 && <div className="addedUser">
                <ul>
                    {users?.map(item => <UserListItem key={item.id} item={item}></UserListItem>)}
                </ul>
            </div>}

        </div>
    )
}

export default UserWrapper