import React from 'react'
import { UserProvider, useUserContext } from './userContext'
import UserFrom from './UserFrom'
import './styles.scss'
import UserListItem from './UserListItem'
import UserWrapper from './UserWrapper'
import ErrorModal from './ErrorModal'
import ReactPortal from '../ReactPortals/ReactPortal'

const UserElement = () => {

    return (
        <UserProvider>
            <div className='User'>
                <UserWrapper></UserWrapper>
                <ReactPortal ClassName={'userFormError'} ModalContent={ErrorModal}   ></ReactPortal>

            </div></UserProvider>
    )
}

export default UserElement