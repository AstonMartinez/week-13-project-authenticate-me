import './BookingConfirmation.css'
import { useDispatch, useSelector } from 'react-redux'
import { useEffect, useState } from 'react'
import { getById } from '../../store/bookings'
import { useParams, useHistory } from 'react-router-dom'

function BookingConfirmation() {
    const dispatch = useDispatch()
    const { bookingId } = useParams()
    const booking = useSelector(state => state.bookings.singleBooking)

    const history = useHistory()
    const [startDate, setStartDate] = useState(booking?.startDate)
    const [endDate, setEndDate] = useState(booking?.endDate)
    const [stayLength, setStayLength] = useState(booking?.stayLength)
    const [haveBooking, setHaveBooking] = useState(false)
    const [currBooking, setCurrBooking] = useState(booking)

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
            console.log("START DATE: ", booking?.startDate)
            console.log("END DATE: ", booking?.endDate)
            if(typeof startDate === "object") {
                startDateSplit = startDate.toDateString().split(" ")
            } else if(typeof startDate === "string"){
                startDateSplit = startDate.split("-")
            } else {
                startDateSplit = "Loading"
            }

            if(typeof endDate === "object") {
                endDateSplit = endDate.toDateString().split(" ")
            } else if(typeof endDate === "string"){
                endDateSplit = endDate.split("-")
            } else {
                endDateSplit = "Loading"
            }

            if(startDateSplit === "Loading") {
                if(endDateSplit === "Loading") {
                    return "Loading info..."
                } else {
                    const endMonth = endDateSplit[1]
                    const endMonthString = getMonthString(endMonth)
                    const endDay = endDateSplit[2]
                    return `Loading... - ${endMonthString} ${endDay}`
                }
            }

            if(endDateSplit === "Loading") {
                if(startDateSplit === "Loading") {
                    return "Loading info..."
                } else {
                    const startMonth = startDateSplit[1]
                    const startMonthString = getMonthString(startMonth)
                    const startDay = startDateSplit[2]
                    return `${startMonthString} ${startDay} - Loading...`
                }
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

    const currDayRange = convertDates(booking?.startDate, booking?.endDate)
    const [dateRange, setDateRange] = useState(convertDates(startDate, endDate))
    const [prevImg, setPrevImg] = useState("")

    useEffect(() => {
        dispatch(getById(bookingId)).then(() => {
            setHaveBooking(true)
            setCurrBooking(booking)
            setPrevImg(currBooking?.Spot?.previewImage)
        })
    }, [dispatch, bookingId])

    // const convertDates = (startDate, endDate) => {
    //     const startDateSplit = startDate.split("-")
    //     const endDateSplit = endDate.split("-")
    //     if(startDateSplit[1] === endDateSplit[1]) {
    //         const month = startDateSplit[1]
    //         const monthString = getMonthString(month)
    //         const startDay = startDateSplit[2]
    //         const endDay = endDateSplit[2]
    //         return `${monthString} ${startDay} - ${endDay}`
    //     } else {
    //         const startMonth = startDateSplit[1]
    //         const startMonthString = getMonthString(startMonth)
    //         const endMonth = endDateSplit[1]
    //         const endMonthString = getMonthString(endMonth)
    //         const startDay = startDateSplit[2]
    //         const endDay = endDateSplit[2]
    //         return `${startMonthString} ${startDay} - ${endMonthString} ${endDay}`
    //     }
    // }

    useEffect(() => {
        dispatch(getById(bookingId)).then(() => {
            setHaveBooking(true)
        })
    }, [dispatch, bookingId])

    return (
        <div id='booking-confirmation-wrapper'>
            <div id='bc-h1'>
                <h1>Booking Confirmed!</h1>
            </div>
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
                            <p className='bc-p'>{convertDates(startDate, endDate)}</p>
                        </div>
                    </div>
                    <div id='bc-los-container'>
                        <div>
                            <h4 className='bc-h4'>Length of Stay</h4>
                        </div>
                        <div>
                            <p className='bc-p'>{stayLength} nights</p>
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
                                    <p id='bc-avg-rating-text'>{booking?.Spot?.avgRating !== 'NaN' ? booking?.Spot?.avgRating : "New"} <span id='bp-spot-reviews-span'>({booking?.Spot?.numReviews} reviews)</span></p>
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
                {/* <button onClick={() => {
                    return <Redirect exact to={`/spots/${booking?.Spot?.id}/bookings/${booking?.id}`} />
                }}>Edit Booking</button> */}
            </div>
        </div>
    )
}

export default BookingConfirmation;
