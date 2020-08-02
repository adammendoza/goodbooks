import React from 'react'
import RereadButton from './RereadButton'

const ReadItem = ({read}) => {
    return (
        <div className='general-item'>
            <h2>Title : {read.title}</h2>
            <p>Thoughts : {read.thoughts}</p>
            <RereadButton/>
        </div>
    )
}

export default ReadItem
