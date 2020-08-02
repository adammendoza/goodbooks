import React, { useContext } from 'react'
import {GlobalContext} from '../../contexts/store'

const ReadingDoneButton = ({reading}) => {

    const {readingDone} = useContext(GlobalContext)


    return (
        <div>
            <button className='done-start-btn' onClick={() => readingDone(reading.id)}>Done</button>
        </div>
    )
}

export default ReadingDoneButton
