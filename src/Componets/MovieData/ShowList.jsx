import React from 'react'

const ShowList = ({item}) => {
    return (
        <div className="list-group m-2">
        <a href="/" className="list-group-item list-group-item-action active" aria-current="true">
            <div className="d-flex w-100 justify-content-between">
                <h5 className="mb-1">{item.name}</h5>
                <small>{item.date}</small>
            </div>
            <p className="mb-1">{item.desc}</p>
            <small>And some small print.</small>
        </a>

    </div>
    )
}

export default ShowList