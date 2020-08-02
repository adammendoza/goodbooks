import React, {useContext} from 'react'
import {GlobalContext} from '../../contexts/store'
import { Icon } from '@iconify/react';
import roundFavorite from '@iconify/icons-ic/round-favorite';




const Favbutton = (props) => {

    const {addToFav} = useContext(GlobalContext)
    return (
        <div className='fav-button'>
            <i onClick={() => addToFav(props.reading.id)}>
            <Icon icon={roundFavorite} />
            </i>
        </div>
    )
}

export default Favbutton

