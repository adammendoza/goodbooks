import React from 'react'
import {BrowserRouter as Router, Link, Switch, Route} from 'react-router-dom'
import LandingPage from '../components/LandingPage'
import ReadingPage from '../components/Reading/ReadingPage'
import Favourite from '../components/Favourites/Favourite'
import Read from '../components/Read/Read'
import Wish from '../components/WishList/Wish'

import { Icon } from '@iconify/react';
import roundAccountCircle from '@iconify/icons-ic/round-account-circle';


const VerticalBar = () => {
    return (
       <Router>
           <div>
           <nav className='horizontal-nav'>
                    <Link className='logo horizontal-link' to='/'>GOODBOOKS</Link>

                    <ul className='horizontal-items'>

                        <li className='horizontal-item '><Link className='horizontal-link end' to='/share'>Share</Link></li>
                        <li className='horizontal-item '><Link className='horizontal-link end' to='/account'>Account</Link></li>
                        <Icon className='acct-icon' icon={roundAccountCircle} />
                    </ul>
                </nav>
               <nav className='vertical-nav'>
                   <ul className='vertical-items'>
                       <li className='vertical-item'><Link to='/reading' className='vertical-link'>Reading</Link></li>
                       <li className='vertical-item'><Link to='/read' className='vertical-link'>Read</Link></li>
                       <li className='vertical-item'><Link to ='/wishlist' className='vertical-link'>WishList</Link></li>
                       <li className='vertical-item'><Link to ='/favorites' className='vertical-link'>Favorites</Link></li>
                   </ul>
               </nav>
         

        <Switch>
            <Route exact strict path='/'>
                <LandingPage/>
            </Route>


            <Route path='/reading'>
                <ReadingPage/>
            </Route>

            <Route path='/favorites'>
                <Favourite/>
            </Route>

            <Route path='/read'>
                <Read/>
            </Route>
            <Route path='/wishlist'>
                <Wish/>
            </Route>
        </Switch>

        </div>
       </Router>
       
    )
}

export default VerticalBar
