import React from 'react'
import { Link } from 'react-router-dom'

const ListElements = ({item}) => {
  return (
    <li className='ListElements'>
        <div className="card border-primary">
          <img className="card-img-top" src="" alt=""/>
          <div className="card-body">
            <h4 className="card-title">Title</h4>
            <Link to={item.url} className="card-text">{item.name}</Link>
          </div>
        </div>
    </li>
  )
}

export default ListElements