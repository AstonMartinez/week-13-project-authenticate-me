import { NavLink } from 'react-router-dom'
import { useState } from 'react'
import { useHistory } from 'react-router-dom'
import DeleteBookingModal from './DeleteBookingModal'
import './Trips.css'

function TripCard({ tripData }) {
    const [showManageDrop, setShowManageDrop] = useState(false)
    const [showDeleteModal, setShowDeleteModal] = useState(false)
    const [selectedBooking, setSelectedBooking] = useState(null)

    const history = useHistory()
    const spot = tripData.Spot
    let nightsInfo
    let guestsInfo

    if(Number(tripData?.stayLength) === 1) {
        nightsInfo = (
            <p>{tripData?.stayLength} night</p>
        )
    } else {
        nightsInfo = (
            <p>{tripData?.stayLength} nights</p>
        )
    }

    if(Number(tripData.numGuests) === 1) {
        guestsInfo = (
            <p>{tripData.numGuests} guest</p>
        )
    } else {
        guestsInfo = (
            <p>{tripData.numGuests} guests</p>
        )
    }

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

    const formatDateRange = () => {
        if(tripData) {
            const startDateArr = tripData.startDate.split("-")
            const endDateArr = tripData.endDate.split("-")
            const startMonthString = getMonthString(startDateArr[1])
            const endMonthString = getMonthString(endDateArr[1])
            const startDay = startDateArr[2]
            const endDay = endDateArr[2]

            if(startDateArr[1] === endDateArr[1]) {
                return `${startMonthString} ${startDay} - ${endDay}`
            } else {
                return `${startMonthString} ${startDay} - ${endMonthString} ${endDay}`
            }
        }
    }

    const manageButtonDropdown = (
        <div id={`manage-booking-dropdown-${showManageDrop}`}>
            <div className='trip-card-manage-button' id='trip-card-manage-update' onClick={() => {
                history.push(`/spots/${tripData?.Spot?.id}/bookings/${tripData.id}`)
            }}>
                <p>Update</p>
                {/* <NavLink exact to={`/spots/${tripData?.Spot?.id}/bookings/${tripData.id}`}>Update</NavLink> */}
            </div>
            <div className='trip-card-manage-button' id='trip-card-manage-update' onClick={() => {
                setShowDeleteModal(true)
                setSelectedBooking(tripData)
            }}>
                <p>Delete</p>
            </div>
        </div>
    )

    return (
        <>
            <div id='single-trip-card-wrapper'>
                <div>
                    <div id='trip-manage-button' onClick={() => setShowManageDrop(!showManageDrop)}>
                        <span className='manage-button-dot'>•</span>
                        <span className='manage-button-dot'>•</span>
                        <span className='manage-button-dot'>•</span>
                    </div>
                    {manageButtonDropdown}
                </div>
                <div id='trip-card-spot-details'>
                    <div id='trip-spot-details-top'>
                        <div id='trip-spot-prev-img-cont'>
                            <img id='trip-card-prev-img' src={spot?.previewImage} alt='destination preview' />
                        </div>
                        <div id='trip-spot-name-avgrating'>
                            <div id='trip-spot-name-cont'>
                                <p>{spot?.name}</p>
                            </div>
                            <div id='trip-spot-avgrating-numreviews'>
                                <i id='trip-card-star-favicon' className="fa-solid fa-star" style={{color: "#000000"}} />
                                <p>{spot?.avgRating !== 'NaN' ? spot?.avgRating : "New"} <span id='trip-card-spot-reviews-span'>({spot?.numReviews ? spot.numReviews : 0} reviews)</span></p>
                            </div>
                        </div>
                    </div>
                    <div id='trip-spot-details-bot'>
                        {/* <div> */}
                        <p className='trip-spot-address-text'>{spot?.address}</p>
                        <p className='trip-spot-address-text'>{spot?.city}, {spot?.state}</p>
                        <p className='trip-spot-address-text'>{spot?.country}</p>
                        {/* </div> */}
                    </div>
                </div>
                <div id='trip-card-summary'>
                    <p>{formatDateRange()}</p><p> • </p>{nightsInfo}<p> • </p>{guestsInfo}
                    {/* <span>{formatDateRange()} • </span><span>{tripData?.stayLength} nights • </span><span>{tripData?.numGuests} guests</span> */}
                </div>
            </div>
            {showDeleteModal && (
                <div>
                    <DeleteBookingModal
                        bookingData={selectedBooking}
                        bookingId={selectedBooking.id}
                        onClose={() => {
                            setShowDeleteModal(false)
                            setSelectedBooking(null)
                        }}
                        onSubmit={() => {
                            setShowDeleteModal(false)
                            setSelectedBooking(null)
                        }}
                    />
                </div>
            )}
        </>
    )
}

export default TripCard;
