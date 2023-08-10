import React from 'react'
import { NavLink } from 'react-router-dom'
import { useSelector } from 'react-redux'
import ProfileButton from './ProfileButton'
import './Navigation.css'
// import * as spotActions from '../../store/spots'
// import FilteredSpotComponent from '../FilteredSpotComponent'

function Navigation({ isLoaded }) {
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

    return (
    <>
        <div id='parent-nav-div'>
            <div id='logo-div'>
                <NavLink exact to='/'><img id='logo-img' src="https://i.ibb.co/35K9CmV/logo.png" alt="logo" border="0"/></NavLink>
                <NavLink exact to='/'>
                    <h1 id='logo-text'>lairbnb</h1>
                </NavLink>
            </div>

            {isLoaded && (
                <>
                {createSpotButton}
                <div id='left-half-nav'>
                <div className='nav-container' >
                    {/* <div className='hamburger-div'>
                        <Hamburger />
                    </div> */}
                    <div className='profile-button-div'>
                        <ProfileButton user={sessionUser}/>
                    </div>
                </div>
                </div>
            </>
            )}
        </div>
    </>
    )
}

export default Navigation;
