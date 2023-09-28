import React, { useState, useEffect, useRef } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import * as sessionActions from '../../store/session'
import OpenModalButton from '../OpenModalButton'
import LoginFormModal from '../LoginFormModal'
import SignupFormModal from '../SignupFormModal'
import './ProfileButton.css'
import { NavLink, useHistory } from 'react-router-dom'
import Hamburger from './Hamburger'

function ProfileButton({ user }) {
    const dispatch = useDispatch()
    const [showMenu, setShowMenu] = useState(false)
    const ulRef = useRef()
    const history = useHistory()
    const sessionUser = useSelector(state => state.session.user)
    // const dispatch = useDispatch()
    // const [filteredSpots, setFilteredSpots] = useState('')
    // const [haveFilteredSpots, setHaveFilteredSpots] = useState(false)
    // const [errors, setErrors] = useState({})
    let createSpotButton;

    if(sessionUser) {
        createSpotButton = (
        <div id={`create-spot-button-div`}>
            <NavLink to='/spots/new'>
                <button id='create-new-spot-button'>Create a New Lair</button>
            </NavLink>
        </div>
        )

    } else {
        createSpotButton = (<></>)
    }

    const openMenu = () => {
        if(showMenu) return;
        setShowMenu(true)
    }

    useEffect(() => {
        if(!showMenu) return
        const closeMenu = (e) => {
            if(!ulRef.current.contains(e.target)) {
                setShowMenu(false)
            }
        }
        document.addEventListener('click', closeMenu)

        return () => document.removeEventListener('click', closeMenu)
    }, [showMenu])

    const logout = (e) => {
        e.preventDefault()
        dispatch(sessionActions.logout())
        history.push('/')
    }

    const ulClassName = "profile-dropdown" + (showMenu ? "" : "-hidden")

    return (
        <div id='create-spot-and-profile-dropdown'>
            {createSpotButton}
            <button onClick={openMenu} className='profile-icon-button'>
            <div className='hamburger-div'>
                        <Hamburger />
                <i className="fa-solid fa-circle-user fa-xl" style={{color: "#000000"}}></i>
            </div>
            </button>
            <div className={ulClassName} ref={ulRef}>
                {user ? (
                    <>
                    <div className='dropdown-menu-list'>
                        <div className='dropdown-inner-wrap' id='manage-trips-wrapper'>
                            {/* <div id='manage-trips-div'> */}
                                {/* <NavLink exact to='/trips/current'> */}
                                    <div className='manage-spots-button' onClick={() => {
                                        history.push('/trips/current')
                                    }}>
                                        Trips
                                    </div>
                                {/* </NavLink> */}
                            {/* </div> */}
                        </div>
                        <div className='dropdown-inner-wrap' id='manage-spots-wrapper'>
                            {/* <div id='manage-spots-div'> */}
                                {/* <NavLink to='/spots/current'> */}
                                    <div className='manage-spots-button' onClick={() => {
                                        history.push('/spots/current')
                                    }}>
                                        Manage Lairs
                                    </div>
                                {/* </NavLink> */}
                            {/* </div> */}
                        </div>
                        <div className='dropdown-inner-wrap' id='logout-wrapper'>
                            {/* <div id='logout-div'> */}
                                {/* <NavLink exact to='/spots/current'> */}
                                    <div className='manage-spots-button' onClick={logout}>Log Out</div>
                                {/* </NavLink> */}
                            {/* </div> */}
                        </div>
                        {/* <li className='user-profile-info' id='user-name-info'>Hello, {user.firstName}</li>
                        <li className='user-profile-info' id='user-username-info'>{user.username}</li>
                        <li className='user-profile-info' id='user-email-info'>{user.email}</li> */}
                        {/* <li className='user-profile-info' id='user-manage-spots'> */}

                        {/* </li> */}
                        {/* <li className='user-profile-info' id='user-manage-spots'> */}

                        {/* </li> */}
                        {/* <li>

                        </li> */}
                    </div>
                    </>
                ) : (
                    <>
                        <li>
                            <OpenModalButton
                                buttonText="Log In"
                                modalComponent={<LoginFormModal />}
                            />
                        </li>
                        <li>
                            <OpenModalButton
                                buttonText="Sign Up"
                                modalComponent={<SignupFormModal />}
                            />
                        </li>
                    </>
                )}
            </div>
        </div>
    )

}

export default ProfileButton;
