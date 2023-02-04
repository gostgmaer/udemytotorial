import React, { useState } from 'react'
import Paragraph from './Paragraph';

const UpdateInAction = () => {
    const [paragraph, setParagraph] = useState(false);
    return (
        <div className='UpdateInAction'>
            <h1>UpdateInAction</h1>
            {<Paragraph paragraph={paragraph} ></Paragraph>}
            {paragraph ? <button onClick={() => setParagraph(!paragraph)}>Hide Paragraph</button> :
                <button onClick={() => setParagraph(!paragraph)}>Show Paragraph</button>}
        </div>
    )
}

export default UpdateInAction