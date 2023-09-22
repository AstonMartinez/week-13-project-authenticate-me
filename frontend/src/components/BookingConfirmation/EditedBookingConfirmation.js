import './BookingConfirmation.css'
import { useDispatch, useSelector } from 'react-redux'
import { useEffect } from 'react'
import { getById } from '../../store/bookings'
import { useParams, useHistory } from 'react-router-dom'

function EditedBookingConfirmation() {
    const dispatch = useDispatch()
    const { id } = useParams()
    const booking = useSelector(state => state.bookings.singleBooking)

    const history = useHistory()

    const getMonthString = (month) => {
        if(month === "01") {
            return "Jan"
        } else if(month === "02") {
            return "Feb"
        } else if(month === "03") {
            return "Mar"
        } else if(month === "04") {
            return "Apr"
        } else if(month === "05") {
            return "May"
        } else if(month === "06") {
            return "Jun"
        } else if(month === "07") {
            return "Jul"
        } else if(month === "08") {
            return "Aug"
        } else if(month === "09") {
            return "Sep"
        } else if(month === "10") {
            return "Oct"
        } else if(month === "11") {
            return "Nov"
        } else if(month === "12") {
            return "Dec"
        }
    }

    const convertDates = (start, end) => {
        if(booking) {
            let startDateSplit
            let endDateSplit
            if(typeof booking?.startDate === "object") {
                startDateSplit = booking?.startDate?.toDateString().split(" ")
            } else {
                startDateSplit = booking?.startDate?.split("-")
            }

            if(typeof booking.endDate === "object") {
                endDateSplit = booking?.endDate?.toDateString().split(" ")
            } else {
                endDateSplit = booking?.endDate?.split("-")
            }

            if(startDateSplit[1] === endDateSplit[1]) {
                const month = startDateSplit[1]
                const monthString = getMonthString(month)
                const startDay = startDateSplit[2]
                const endDay = endDateSplit[2]
                return `${monthString} ${startDay} - ${endDay}`
            } else {
                const startMonth = startDateSplit[1]
                const startMonthString = getMonthString(startMonth)
                const endMonth = endDateSplit[1]
                const endMonthString = getMonthString(endMonth)
                const startDay = startDateSplit[2]
                const endDay = endDateSplit[2]
                return `${startMonthString} ${startDay} - ${endMonthString} ${endDay}`
            }
        }

    }

    useEffect(() => {
        dispatch(getById(id))
    }, [dispatch, id])

    return (
        <div id='booking-confirmation-wrapper'>
            <div id='bc-h1'>
                <h1>Booking Confirmed!</h1>
            </div>
            {/* <div>
                <h2>Details:</h2>
            </div> */}
            <div id='booking-details-wrapper'>
                <div id='booking-confirmation-details-top-half'>
                    <div id='bc-dates-container'>
                        <div>
                            <h3>When</h3>
                        </div>
                        <div>
                            <h4 className='bc-h4'>Dates</h4>
                        </div>
                        <div>
                            <p className='bc-p'>{convertDates(booking?.startDate, booking?.endDate)}</p>
                        </div>
                    </div>
                    <div id='bc-los-container'>
                        <div>
                            <h4 className='bc-h4'>Length of Stay</h4>
                        </div>
                        <div>
                            <p className='bc-p'>{booking?.stayLength} nights</p>
                        </div>
                    </div>
                </div>
                <div id='booking-confirmation-details-bottom-half'>
                    <div id='bc-where-header'>
                        <h3>Where</h3>
                    </div>
                    <div id='bc-spot-img-name-reviews-outer'>
                        <div>
                            <img id='booking-confirmation-lair-prev' src={booking?.Spot?.previewImage} alt='lairbnb preview' />
                        </div>
                        <div id='bc-spot-name-revs-dets'>
                            <div id='bc-spot-name'>
                                <div id='bc-spot-name-inner'>
                                    <span id='bc-name-span'>{booking?.Spot?.name}</span>
                                </div>
                                <div id='bc-icon-ratings'>
                                    <i id='bc-star-favicon' className="fa-solid fa-star" style={{"color": "#000000"}} />
                                    <p id='bc-avg-rating-text'>{booking?.Spot?.avgRating} <span id='bp-spot-reviews-span'>({booking?.Spot?.numReviews} reviews)</span></p>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div>
                        <div id='bc-address-header'>
                            <h4 className='bc-h4'>Address:</h4>
                        </div>
                        <div id='address-span-container'>
                            <span className='bc-address-text'>{booking?.Spot?.address}</span>
                            <span className='bc-address-text'>{booking?.Spot?.city}, {booking?.Spot?.state}</span>
                            <span className='bc-address-text'>{booking?.Spot?.country}</span>
                        </div>
                    </div>
                </div>
            </div>
            <div id='bc-edit-booking-button-wrapper'>
                <button id='bc-edit-booking-button' onClick={() => {
                    history.push(`/spots/${booking?.Spot?.id}/bookings/${booking?.id}`)
                }}>Edit Booking</button>
            </div>
        </div>
    )
}

export default EditedBookingConfirmation;
