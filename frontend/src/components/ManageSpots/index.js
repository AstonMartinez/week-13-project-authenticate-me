import { NavLink } from 'react-router-dom'
import { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import * as spotActions from '../../store/spots'
import SpotCard from '../SpotCards'
import './ManageSpots.css'

function ManageSpots() {
    const allSpots = useSelector(state => state.spots.allSpots)
    const sessionUser = useSelector(state => state.session.user)
    const spots = Object.values(allSpots)
    const final = spots[0]

    const dispatch = useDispatch()

    useEffect(() => {
        dispatch(spotActions.fetchUserSpots())
    }, [dispatch, final])

 return (
    <div id='manage-spots-parent-container'>
                <h2 id='manage-spots-title-text'>Manage Your Lairs</h2>
                <NavLink exact to='/spots/new'>
                    <button id='manage-spots-create-new-button'>Create a New Lair</button>
                </NavLink>
        <div id='manage-spots-show-parent-div'>
            <div id='spot-card-show-div'>
                    {final && final.map((spot) => (
                        <div id='individual-card-manage-spots'>
                            <SpotCard spot={spot} key={spot.id} user={sessionUser} />
                        </div>))
                    }
            </div>
        </div>
    </div>

 )
}

export default ManageSpots;
