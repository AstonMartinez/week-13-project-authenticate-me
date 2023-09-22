import { NavLink } from 'react-router-dom'
import { useState } from 'react'
import './Trips.css'

function TripCard({ tripData }) {
    const [showManageDrop, setShowManageDrop] = useState(false)
    const spot = tripData.Spot

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
            <NavLink exact to={`/spots/${tripData?.Spot?.id}/bookings/${tripData.id}`}>Update</NavLink>
            <button>Delete</button>
        </div>
    )

    return (
        <div>
            <div>
                <div id='trip-manage-button'>
                    <span>•</span>
                    <span>•</span>
                    <span>•</span>
                </div>
                {manageButtonDropdown}
            </div>
            <div>
                <div>
                    <img id='trip-card-prev-img' src={spot?.previewImage} alt='destination preview' />
                </div>
                <div>
                    <p>{spot?.name}</p>
                    <div>
                        <i id='bp-star-favicon' className="fa-solid fa-star" style={{color: "#000000"}} />
                        <p>{spot?.avgRating !== 'NaN' ? spot?.avgRating : "New"} <span id='bp-spot-reviews-span'>({spot?.numReviews} reviews)</span></p>
                    </div>
                </div>
                <div>
                    <span>{spot?.address}</span>
                    <span>{spot?.city}, {spot?.state}</span>
                    <span>{spot?.country}</span>
                </div>
            </div>
            <div>
                <span>{formatDateRange()}</span>
                <span>{tripData?.stayLength} nights</span>
                <span>{tripData?.numGuests} guests</span>
            </div>
        </div>
    )
}

export default TripCard;
