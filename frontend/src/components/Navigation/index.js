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
            <div id='logo-div'>
                <NavLink exact to='/'><img id='logo-img' src="https://i.ibb.co/35K9CmV/logo.png" alt="logo" border="0"/></NavLink>
                <h1 id='logo-text'>LairBnb</h1>
            </div>
            {/* <div className='home-navlink-div'>
                <NavLink exact to='/'>Home</NavLink>
            </div> */}
            {isLoaded && (
                <div id='left-half-nav'>
                <div className='nav-container' >
                    <div className='hamburger-div'>
                        <Hamburger />
                    </div>
                    <div className='profile-button-div'>
                        <ProfileButton user={sessionUser}/>
                    </div>
                </div>
                </div>
            )}
        </div>
    )
}

export default Navigation;
