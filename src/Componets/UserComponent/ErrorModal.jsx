import React from 'react'
import { useUserContext } from './userContext';

const ErrorModal = () => {
    const { users, setUsers, error, setError, isOpen, itemHistory, setItemHistory, setIsOpen } = useUserContext();
    return (
        <div className='ErrorModal'>
            <div className="modalWrapper">
                <div className="heading">
                    <h1>Invalid</h1>
                </div>
                <div className="body">
                    <div className="message"><h3>{error}</h3></div>
                </div>
                <div className="bottom"><button onClick={() => setIsOpen(!isOpen)}>Okay</button></div>
            </div>
        </div>
    )
}

export default ErrorModal