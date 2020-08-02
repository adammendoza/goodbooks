import React from 'react'
import { Link, BrowserRouter as Router, Switch, Route } from 'react-router-dom'
import LandingPage from '../components/LandingPage'





const HorizontalBar = () => {
    return (
        <Router>
            <div>
                

                {/* <Switch>
                    <Route exact strict path='/'>
                        <LandingPage />
                    </Route>

                    <Route path='/home'>
                        <LandingPage />
                    </Route>


                </Switch> */}
            </div>
        </Router>
    )
}

export default HorizontalBar
