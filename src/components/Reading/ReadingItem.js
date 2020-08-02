import React, {useContext} from 'react'
import {GlobalContext} from '../../contexts/store'
import Favbutton from '../Favourites/Favbutton'
import ReadingDoneButton from './ReadingDoneButton'

import { Icon } from '@iconify/react';
import baselineDeleteForever from '@iconify/icons-ic/baseline-delete-forever';

const ReadingItem = (props) => {

    const {deleteBook, editReading, toggleEditing } = useContext(GlobalContext)
    return (
        <div >
            {editReading ? 
            <div className='general-item'> 
            <input type='text' value={props.reading.title}/>
            <input type='text' value={props.reading.thoughts}/>
            </div>    
            :
            <div className='general-item'>
            <h3>Title : {props.reading.title}</h3>
            <p>Thoughts : {props.reading.thoughts}</p>
            </div>}
            <p className='delete-icon' onClick={() => deleteBook(props.reading.id)}>
            <Icon className='delete-icon' icon={baselineDeleteForever} />
            </p>
            {<Favbutton reading={props.reading}/>}
             {<ReadingDoneButton reading={props.reading}/>}
            <button className='edit-btn' onClick={() => toggleEditing(props.reading.id)} >Edit</button> 
            {/* <button>Delete</button> */}
            
        </div>
    )
}

export default ReadingItem



