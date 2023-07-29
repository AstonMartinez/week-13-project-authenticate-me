import React from 'react'
import { NavLink } from 'react-router-dom'
import { useSelector, useDispatch } from 'react-redux'
import ProfileButton from './ProfileButton'
import * as sessionActions from '../../store/session'
import './Navigation.css'
import Hamburger from './Hamburger'
import { useState, useEffect, useRef } from 'react'

function Navigation({ isLoaded }) {
    const sessionUser = useSelector(state => state.session.user)
    const dispatch = useDispatch()
    // const [hamburgerStatus, setHamburgerStatus] = useState('inactive')
    const [showMenu, setShowMenu] = useState('inactive')
    const ulRef = useRef()

    const logout = (e) => {
        e.preventDefault()
        dispatch(sessionActions.logout())
    }

    const openMenu = () => {
        // if(showMenu === 'active') {
        //     setShowMenu('inactive')
        // } else {
            setShowMenu('active')
        // }
    }

    useEffect(() => {
        if(showMenu === 'inactive') return;
        const closeMenu = (e) => {
            if(!ulRef.current.contains(e.target))
            setShowMenu('inactive')
        }

        document.addEventListener('click', closeMenu)

        return () => document.removeEventListener('click', closeMenu)
    }, [showMenu])

    let sessionLinks;

    if(sessionUser) {
        sessionLinks = (
            <>
                <div className='nav-container' onClick={openMenu}>
                    <div className='hamburger-div'>
                        <Hamburger />
                    </div>
                    <div className='profile-button-div'>
                        <ProfileButton />
                    </div>
                </div>
                <ul className={`hamburger-nav-${showMenu}`} ref={ulRef}>
                    <div id='user-username'>{sessionUser.username}</div>
                    <div id='user-name'>{sessionUser.firstName} {sessionUser.lastName}</div>
                    <div id='user-email'>{sessionUser.email}</div>
                    <div id='logout-li'><button onClick={logout}>Log Out</button></div>
                </ul>
            </>

        )
    } else {
        // setUserState('disabled')
        sessionLinks = (
            <>
                <div className='login-navlink-div'>
                    <NavLink to='/login'>Log In</NavLink>
                </div>
                <div className='signup-navlink-div'>
                    <NavLink to='/signup'>Sign Up</NavLink>
                </div>
            </>
        )
    }

    return (
        <div id='parent-nav-div'>
            <div className='home-navlink-div'>
                <NavLink exact to='/'>Home</NavLink>
            </div>
            {isLoaded && sessionLinks}
        </div>
    )
}

export default Navigation;
