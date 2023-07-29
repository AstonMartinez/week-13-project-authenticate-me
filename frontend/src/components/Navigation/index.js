import React from 'react'
import { NavLink } from 'react-router-dom'
import { useSelector } from 'react-redux'
import ProfileButton from './ProfileButton'
import './Navigation.css'
import Hamburger from './Hamburger'

function Navigation({ isLoaded }) {
    const sessionUser = useSelector(state => state.session.user)

    return (
        <div id='parent-nav-div'>
            <div className='home-navlink-div'>
                <NavLink exact to='/'>Home</NavLink>
            </div>
            {isLoaded && (
                <>
                <div className='nav-container' >
                    <div className='hamburger-div'>
                        <Hamburger />
                    </div>
                    <div className='profile-button-div'>
                        <ProfileButton user={sessionUser}/>
                    </div>
                </div>
                </>
            )}
        </div>
    )
}

export default Navigation;
