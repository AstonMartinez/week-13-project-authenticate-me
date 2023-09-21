import './BookingConfirmation.css'
import { useDispatch, useSelector } from 'react-redux'
import { useEffect, useState } from 'react'
import { getById } from '../../store/bookings'
import { useParams } from 'react-router-dom'

function BookingConfirmation() {
    const dispatch = useDispatch()
    // const { id } = useParams()
    const booking = useSelector(state => state.bookings.singleBooking)
    const bId = booking.id
    const [currBooking, setCurrBooking] = useState(booking)
    const [bookingId, setBookingId] = useState(bId)
    console.log(currBooking)
    console.log(bookingId)

    // useEffect(() => {
    //     dispatch(getById())
    // })
    return (
        <div>
            <div>
                <h1>Booking Confirmed!</h1>
            </div>
            <div>
                <h2>Details:</h2>
            </div>
        </div>
    )
}

export default BookingConfirmation;
