import './Trips.css'
import { useState, useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { getByUserId } from '../../store/bookings'
import TripCard from './TripCards'

function UserTrips() {
    const dispatch = useDispatch()
    const allBookings = useSelector(state => state.bookings.allBookings)
    const sessionUser = useSelector(state => state.session.user)

    const userTrips = allBookings.Bookings
    let noTripsText

    if(!userTrips) {
        noTripsText = "You haven't created a booking yet!"
    } else {
        noTripsText = ''
    }

    useEffect(() => {
        dispatch(getByUserId(sessionUser.id))
    }, [dispatch, sessionUser.id])

    return (
        <>
            <div>
                <h2>My Trips</h2>
            </div>
            <div>
                {noTripsText}
                {userTrips && userTrips.length && userTrips.map((trip) => (
                    <div>
                        <TripCard tripData={trip} />
                    </div>
                ) )}
            </div>
        </>
    )
}

export default UserTrips;
