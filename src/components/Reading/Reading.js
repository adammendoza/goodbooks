import React, { useContext, useState } from 'react'
import { GlobalContext } from '../../contexts/store'
import { Icon } from '@iconify/react';
import addTextLine from '@iconify/icons-clarity/add-text-line';


const Reading = () => {

    const [title, setTitle] = useState('')
    const [thoughts, setThoughts] = useState('')


    const { addBook, openForm, formOpen } = useContext(GlobalContext)
    // console.log(addBook)

    const handleSubmit = (e) => {
        e.preventDefault()

        const newReading = {
            id: Math.floor(Math.random * 1000),
            title,
            thoughts
        }

        addBook(newReading)
        setThoughts('')
        setTitle('')
    }

    return (
        <div className='add-a-book-section'>
            <h4>Add a Book...  <Icon className='icon' icon={addTextLine} onClick={(e) => openForm(e)}/></h4>
           { formOpen && <form onSubmit={handleSubmit} >
                <label className='info title-info'>
                    Enter Title </label>
                <input type='text' placeholder='Rich dad, poor dad' required value={title} 
                onChange={(e) => setTitle(e.target.value)}/>


                <label className='info thoughts-info'>
                    Enter your thoughts</label>

                <textarea type='text' placeholder='I am learning a lot about our financial system.' required value={thoughts}
                onChange={(e) => setThoughts(e.target.value)}
                />

                <button className='add-btn' >Add book</button>
            </form> }
            

        </div>
    )
}

export default Reading
