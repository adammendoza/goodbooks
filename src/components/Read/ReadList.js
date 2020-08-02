import React, { useContext } from 'react'
import ReadItem from './ReadItem'
import {GlobalContext} from '../../contexts/store'

const ReadList = () => {

    const {readList} = useContext(GlobalContext)
    return (
        <div>
            <p className='tab-intro'>Books I have read</p>
            {readList.map(read =>  <ReadItem key={read.id} read={read}/>)}
           
        </div>
    )
}

export default ReadList
