import React from 'react'
import { UserProvider, useUserContext } from './userContext'
import UserFrom from './UserFrom'
import './styles.scss'
import UserListItem from './UserListItem'
import UserWrapper from './UserWrapper'
import ErrorModal from './ErrorModal'

const UserElement = () => {

    return (
        <UserProvider>
            <div className='User'>
                <UserWrapper></UserWrapper>
               
            </div></UserProvider>
    )
}

export default UserElement