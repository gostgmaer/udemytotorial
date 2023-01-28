import React from 'react'
import { MdClose, MdEdit } from 'react-icons/md';
import { useUserContext } from './userContext';

const UserListItem = ({ item }) => {
    const { users, setUsers, isOpen, setIsOpen, itemHistory, setItemHistory } = useUserContext();

    const DeleteElement = (id) => {
        setUsers(users.filter(data => data.id !== id))
    }
    const EditElement = (id) => {
        setItemHistory(users.find(data => data.id === id))

    }



    return (
        <li className='UserListItem'>
            <div className="itemBlock">
                <h4>{item.name}</h4>
                <label><strong>{item.email}</strong></label>
                <label className="age">{item.age}</label>
            </div>
            <div className="icons"><MdClose onClick={() => DeleteElement(item.id)}></MdClose><MdEdit onClick={() => EditElement(item.id)}></MdEdit> </div></li>
    )
}

export default UserListItem