import React from 'react'





const FavoriteItem = (props) => {
    return (
        <div className='general-item'>
            <h2>Title : {props.fav.title}</h2>
            <p>Thoughts : {props.fav.thoughts}</p>
            
        </div>
    )
}

export default FavoriteItem
