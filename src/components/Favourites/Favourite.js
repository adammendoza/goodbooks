import React, {useContext} from 'react'
import FavoriteItem from './FavoriteItem'
import {GlobalContext} from '../../contexts/store'
import { Icon } from '@iconify/react';
import roundFavorite from '@iconify/icons-ic/round-favorite';





const Favourite = () => {

    const {favList} = useContext(GlobalContext)
    return (
        <div className='main-page'>
            <h2 className='tab-intro'>My best reads so far <Icon className='top-fav' icon={roundFavorite} /> </h2>
            { favList.map(fav => 
            <FavoriteItem key={fav.id} fav={fav}/>
            )}
        </div>
    )
}

export default Favourite
