import React, { Fragment } from 'react'
import { useGlobalContext } from '../../Context/GlobalCOntext';
import { useUserContext } from './userContext';

const ErrorModal = () => {
    const { modalhandler } = useGlobalContext()
    const { users, setUsers, error, setError, isOpen, itemHistory, setItemHistory, setIsOpen } = useUserContext();
    return (
        <Fragment>
            <div className="heading text-black">
                <h2 className='h2 text-capitalize'>Invalid</h2> <button className='btn btn-danger' onClick={modalhandler}>X</button>
            </div>
            <div className="body">
                <div className="message"><h3>{error}</h3></div>
            </div>

        </Fragment>
    )
}

export default ErrorModal