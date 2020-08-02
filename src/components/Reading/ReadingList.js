import React, { useContext } from 'react'
import {GlobalContext} from '../../contexts/store'
import ReadingItem from './ReadingItem'



const ReadingList = () => {

    const {readingList} = useContext(GlobalContext)
    return (
        <div>
            <p className='tab-intro'>Books I am currently reading</p>
            {readingList.map(reading => 
                <ReadingItem key={reading.id} reading={reading}/>
            )}
            
        </div>
    )
}

export default ReadingList
