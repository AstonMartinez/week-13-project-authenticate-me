import React from 'react'
import { NavLink } from 'react-router-dom'
import { useSelector, useDispatch } from 'react-redux'
import ProfileButton from './ProfileButton'
import * as sessionActions from '../../store/session'
import './Navigation.css'
import Hamburger from './Hamburger'
import { useState, useEffect, useRef } from 'react'
import OpenModalButton from '../OpenModalButton'
import LoginFormModal from '../LoginFormModal'
import SignupFormModal from '../SignupFormModal'

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
        setShowMenu('active')
    }

    useEffect(() => {
        if(showMenu === 'inactive') return;
        const closeMenu = (e) => {
            if(showMenu === 'active') {
                if(!ulRef.current.contains(e.target))
                setShowMenu('inactive')
            } else {
                return
            }
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
                    <OpenModalButton
                        buttonText="Log In"
                        modalComponent={<LoginFormModal />}
                    />
                </div>
                <div className='signup-navlink-div'>
                    <OpenModalButton
                        buttonText="Sign Up"
                        modalComponent={<SignupFormModal />}
                    />
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
