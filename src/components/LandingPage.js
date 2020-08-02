import React from 'react'
import { Icon } from '@iconify/react';
import connect2 from '@iconify/icons-si-glyph/connect-2';
import baselineFindInPage from '@iconify/icons-ic/baseline-find-in-page';
import welcomeLearnMore from '@iconify/icons-dashicons/welcome-learn-more';




const LandingPage = () => {
    return (
        <div className='landing-section'>
            <h2>Welcome to Goodbooks!</h2>
            <p>Read together with your friends and enjoy the joy of Community!</p>

            <section className='benefits-section'> 
                <div className='benefits-item'>
                    <p>Connect</p>
                    <Icon className='landing-icon' icon={connect2} />
                </div>
                <div className='benefits-item'>
                    <p>Find</p>
                    <Icon  className='landing-icon' icon={baselineFindInPage} />
                </div>
                <div className='benefits-item'>
                    <p>Learn</p>
                    <Icon className='landing-icon' icon={welcomeLearnMore} />
                </div>
            </section>
        </div>
    )
}

export default LandingPage

