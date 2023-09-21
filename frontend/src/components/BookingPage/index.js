import { useParams, useHistory } from 'react-router-dom'
import './BookingPage.css'
import { useState, useRef, useEffect } from 'react'
import Calendar from 'react-calendar'
import CalendarModal from './CalendarModal'
import { csrfFetch } from '../../store/csrf'
import { useDispatch, useSelector } from 'react-redux'
import { createNewBooking } from '../../store/bookings'
import { fetchSingleSpot } from '../../store/spots'
// import { getLengthOfStay } from './stayLength'

function BookingPage() {
    const { id } = useParams()
    const dispatch = useDispatch()
    const history = useHistory()
    const spot = useSelector(state => state.spots.singleSpot)
    // console.log(spot)
    const spotImages = spot.SpotImages
    // console.log(spotImages)
    let previewImage
    if(spot && spotImages) {
        previewImage = spotImages.find(img => img.preview === true)
    } else {
        previewImage = ''
    }
    const defaultStart = new Date().toDateString()
    const [isTravelInsurance, setIsTravelInsurance] = useState(false)
    const [showModal, setShowModal] = useState(false)
    const [adultsNum, setAdultsNum] = useState(1)
    const [childrenNum, setChildrenNum] = useState(0)
    const [infantsNum, setInfantsNum] = useState(0)
    const [petsNum, setPetsNum] = useState(0)
    const [beginningGuestsNum, setBeginningGuestsNum] = useState(1)
    const [totalGuestsNum, setTotalGuestsNum] = useState(1)
    const [guestsNumError, setGuestsNumError] = useState('')
    const [showGuestsModal, setShowGuestsModal] = useState(false)
    const [submitError, setSubmitError] = useState('')

    useEffect(() => {
        dispatch(fetchSingleSpot(id))
    }, [dispatch])

    const determineMonthLength = (month) => {
        if(month === 'Jan') {
            return 31
        } else if(month === 'Feb') {
            return 28
        } else if(month === 'Mar') {
            return 31
        } else if(month === 'Apr') {
            return 30
        } else if(month === 'May') {
            return 31
        } else if(month === 'Jun') {
            return 30
        } else if(month === 'Jul') {
            return 31
        } else if(month === 'Aug') {
            return 31
        } else if(month === 'Sep') {
            return 30
        } else if(month === 'Oct') {
            return 31
        } else if(month === 'Nov') {
            return 30
        } else if(month === 'Dec') {
            return 31
        }
    }

    const getLengthOfStay = (start, end) => {
        let startDateArr
        let endDateArr
        if(typeof start === "object") {
            startDateArr = start.toDateString().split(" ")
        } else {
            startDateArr = start.split(" ")
        }

        if(typeof end === "object") {
            endDateArr = end.toDateString().split(" ")
        } else {
            endDateArr = end.split(" ")
        }

        if(startDateArr[1] === endDateArr[1]) {
          const startDateNum = startDateArr[2]
          const endDateNum = endDateArr[2]
          return endDateNum - startDateNum
        }
          else {
            const monthLength = determineMonthLength(startDateArr[1])
            const startDateNum = startDateArr[2]
            const endDateNum = monthLength
            const sum1 = endDateNum - startDateNum
            const result = Number(sum1) + Number(endDateArr[2])
            return result
        }
    }


    const getDefaultDates = (dateInfo) => {
        const dateArr = dateInfo.split(' ')
        // let result = []
        // console.log(dateArr)
        if(dateArr[1] === 'Jan') {
            const incrementedDate = Number(dateArr[2]) + 1
            const projectedEndDate = Number(dateArr[2]) + 3
            if(projectedEndDate <= 31) {
                return `${dateArr[1]} ${incrementedDate} - ${projectedEndDate}`
            } else {
                return "Feb 1 - 3"
            }
        } else if(dateArr[1] === 'Feb') {
            const incrementedDate = Number(dateArr[2]) + 1
            const projectedEndDate = Number(dateArr[2]) + 3
            if(projectedEndDate <= 28) {
                return `${dateArr[1]} ${incrementedDate} - ${projectedEndDate}`
            } else {
                return "Mar 1 - 3"
            }
        } else if(dateArr[1] === 'Mar') {
            const incrementedDate = Number(dateArr[2]) + 1
            const projectedEndDate = Number(dateArr[2]) + 3
            if(projectedEndDate <= 31) {
                return `${dateArr[1]} ${incrementedDate} - ${projectedEndDate}`
            } else {
                return "Apr 1 - 3"
            }
        } else if(dateArr[1] === 'Apr') {
            const incrementedDate = Number(dateArr[2]) + 1
            const projectedEndDate = Number(dateArr[2]) + 3
            if(projectedEndDate <= 30) {
                return `${dateArr[1]} ${incrementedDate} - ${projectedEndDate}`
            } else {
                return "May 1 - 3"
            }
        } else if(dateArr[1] === 'May') {
            const incrementedDate = Number(dateArr[2]) + 1
            const projectedEndDate = Number(dateArr[2]) + 3
            if(projectedEndDate <= 31) {
                return `${dateArr[1]} ${incrementedDate} - ${projectedEndDate}`
            } else {
                return "Jun 1 - 3"
            }
        } else if(dateArr[1] === 'Jun') {
            const incrementedDate = Number(dateArr[2]) + 1
            const projectedEndDate = Number(dateArr[2]) + 3
            if(projectedEndDate <= 30) {
                return `${dateArr[1]} ${incrementedDate} - ${projectedEndDate}`
            } else {
                return "Jul 1 - 3"
            }
        } else if(dateArr[1] === 'Jul') {
            const incrementedDate = Number(dateArr[2]) + 1
            const projectedEndDate = Number(dateArr[2]) + 3
            if(projectedEndDate <= 31) {
                return `${dateArr[1]} ${incrementedDate} - ${projectedEndDate}`
            } else {
                return "Aug 1 - 3"
            }
        } else if(dateArr[1] === 'Aug') {
            const incrementedDate = Number(dateArr[2]) + 1
            const projectedEndDate = Number(dateArr[2]) + 3
            if(projectedEndDate <= 31) {
                return `${dateArr[1]} ${incrementedDate} - ${projectedEndDate}`
            } else {
                return "Sep 1 - 3"
            }
        } else if(dateArr[1] === 'Sep') {
            // console.log(dateArr[2])
            const incrementedDate = Number(dateArr[2]) + 1
            const projectedEndDate = Number(dateArr[2]) + 3
            // console.log(incrementedDate, projectedEndDate)
            if(projectedEndDate <= 30) {
                return `${dateArr[1]} ${incrementedDate} - ${projectedEndDate}`
            } else {
                return "Oct 1 - 3"
            }
        } else if(dateArr[1] === 'Oct') {
            const incrementedDate = Number(dateArr[2]) + 1
            const projectedEndDate = Number(dateArr[2]) + 3
            if(projectedEndDate <= 31) {
                return `${dateArr[1]} ${incrementedDate} - ${projectedEndDate}`
            } else {
                return "Nov 1 - 3"
            }
        } else if(dateArr[1] === 'Nov') {
            const incrementedDate = Number(dateArr[2]) + 1
            const projectedEndDate = Number(dateArr[2]) + 3
            if(projectedEndDate <= 30) {
                return `${dateArr[1]} ${incrementedDate} - ${projectedEndDate}`
            } else {
                return "Dec 1 - 3"
            }
        } else if(dateArr[1] === 'Dec') {
            const incrementedDate = Number(dateArr[2]) + 1
            const projectedEndDate = Number(dateArr[2]) + 3
            if(projectedEndDate <= 31) {
                return `${dateArr[1]} ${incrementedDate} - ${projectedEndDate}`
            } else {
                return "Jan 1 - 3"
            }
        }
    }

    const changeGuests = (type, plusOrMinus) => {
        const currentTotal = adultsNum + childrenNum + infantsNum + petsNum
        if(type === "Adults") {
            if(plusOrMinus === "+") {
                if(currentTotal < 10) {
                    setAdultsNum(adultsNum + 1)
                    setTotalGuestsNum(totalGuestsNum + 1)
                    return
                } else {
                    setGuestsNumError("You've reached your maximum number of guests")
                    return
                }
            } else {
                if(currentTotal === 0 || adultsNum === 0) {
                    return
                } else {
                    setAdultsNum(adultsNum - 1)
                    setTotalGuestsNum(totalGuestsNum - 1)
                    return
                }
            }
        } else if(type === "Children") {
            if(plusOrMinus === "+") {
                if(currentTotal < 10) {
                    setChildrenNum(childrenNum + 1)
                    setTotalGuestsNum(totalGuestsNum + 1)
                    return
                } else {
                    setGuestsNumError("You've reached your maximum number of guests")
                    return
                }
            } else {
                if(currentTotal === 0 || childrenNum === 0) {
                    return
                } else {
                    setChildrenNum(childrenNum - 1)
                    setTotalGuestsNum(totalGuestsNum - 1)
                    return
                }
            }
        } else if(type === "Infants") {
            if(plusOrMinus === "+") {
                if(currentTotal < 10) {
                    setInfantsNum(infantsNum + 1)
                    setTotalGuestsNum(totalGuestsNum + 1)
                    return
                } else {
                    setGuestsNumError("You've reached your maximum number of guests")
                    return
                }
            } else {
                if(currentTotal === 0 || infantsNum === 0) {
                    return
                } else {
                    setInfantsNum(infantsNum - 1)
                    setTotalGuestsNum(totalGuestsNum - 1)
                    return
                }
            }
        } else if(type === "Pets") {
            if(plusOrMinus === "+") {
                if(currentTotal < 10) {
                    setPetsNum(petsNum + 1)
                    setTotalGuestsNum(totalGuestsNum + 1)
                    return
                } else {
                    setGuestsNumError("You've reached your maximum number of guests")
                    return
                }
            } else {
                if(currentTotal === 0 || petsNum === 0) {
                    return
                } else {
                    setPetsNum(petsNum - 1)
                    setTotalGuestsNum(totalGuestsNum - 1)
                    return
                }
            }
        }
    }

    const months = ["January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December"]

    const defaultDateInfo = getDefaultDates(defaultStart)

    const getMonthNum = (month) => {
        if(month === "Jan") {
            return 1
        } else if(month === "Feb") {
            return 2
        } else if(month === "Mar") {
            return 3
        } else if(month === "Apr") {
            return 4
        } else if(month === "May") {
            return 5
        } else if(month === "Jun") {
            return 6
        } else if(month === "Jul") {
            return 7
        } else if(month === "Aug") {
            return 8
        } else if(month === "Sep") {
            return 9
        } else if(month === "Oct") {
            return 10
        } else if(month === "Nov") {
            return 11
        } else if(month === "Dec") {
            return 12
        }
    }
    // const formatDateAnswer = (data) => {
    //     const dataSplit = data.split(" ")
    //     const monthIndex = getMonthNum(dataSplit[1])
    //     const
    // }

    const formatStartDates = (dates) => {
        const datesSplit = dates.split(' ')
        if(Number(datesSplit[1]) === 1 && Number(datesSplit[3]) === 3) {
            const monthString = datesSplit[0]
            const monthNum = getMonthNum(monthString)
            const day = datesSplit[1]
            let year
            if(monthString === "Jan") {
                year = new Date().getFullYear() + 1
            } else {
                year = new Date().getFullYear()
            }
            const newDateObj = new Date(`${year}-${monthNum}-${day}`)
            return newDateObj.toDateString()
        } else {
            const monthString = datesSplit[0]
            const monthNum = getMonthNum(monthString)
            const day = datesSplit[1]
            const year = new Date().getFullYear()
            const newDateObj = new Date(`${year}-${monthNum}-${day}`)
          	return newDateObj.toDateString()
        }
    }

    const formatEndDates = (dates) => {
        const datesSplit = dates.split(' ')
        if(Number(datesSplit[1]) === 1 && Number(datesSplit[3]) === 3) {
            const monthString = datesSplit[0]
            const monthNum = getMonthNum(monthString)
            const day = datesSplit[3]
            let year
            if(monthString === "Jan") {
                year = new Date().getFullYear() + 1
            } else {
                year = new Date().getFullYear()
            }
            const newDateObj = new Date(`${year}-${monthNum}-${day}`)
            return newDateObj.toDateString()
        } else {
            const monthString = datesSplit[0]
            const monthNum = getMonthNum(monthString)
            const day = datesSplit[3]
            const year = new Date().getFullYear()
            const newDateObj = new Date(`${year}-${monthNum}-${day}`)
          	return newDateObj.toDateString()
        }
    }
    const formattedStartDate = formatStartDates(defaultDateInfo)
    const formattedEndDate = formatEndDates(defaultDateInfo)

    const [defaultDates, setDefaultDates] = useState(defaultDateInfo)
    // const [checkin, setCheckin] = useState('')
    // const [checkout, setCheckout] = useState('')
    const [guestsNum, setGuestsNum] = useState(1)
    const [showCalMenuOne, setShowCalMenuOne] = useState(false)
    const [showCalMenuTwo, setShowCalMenuTwo] = useState(false)
    const [startDate, setStartDate] = useState(formattedStartDate)

    const [endDate, setEndDate] = useState(formattedEndDate)
    // const stayLength = getLengthOfStay(startDate, endDate)
    const [lengthOfStay, setLengthOfStay] = useState(getLengthOfStay(startDate, endDate))
    const [saveDateError, setSaveDateError] = useState('')

    const ulRef = useRef()


    const calendarClassName = "calendar-dropdown" + (showCalMenuOne ? "" : "-hidden")

    const openMenuOne = () => {
        if(showCalMenuOne) return setShowCalMenuOne(false);
        return setShowCalMenuOne(true)
    }

    const openMenuTwo = () => {
        if(showCalMenuTwo) return setShowCalMenuTwo(false);
        return setShowCalMenuTwo(true)
    }

    const handleDatesChangeSubmit = () => {
        let startDateArr
        let endDateArr
        if(typeof startDate === "object") {
            startDateArr = startDate.toDateString().split(" ")
        } else {
            startDateArr = startDate.split(" ")
        }

        if(typeof endDate === "object") {
            endDateArr = endDate.toDateString().split(" ")
        } else {
            endDateArr = endDate.split(" ")
        }

        if(startDateArr[1] === endDateArr[1]) {
            setDefaultDates(`${startDateArr[1]} ${startDateArr[2]} - ${endDateArr[2]}`)
        } else {
            setDefaultDates(`${startDateArr[1]} ${startDateArr[2]} - ${endDateArr[1]} ${endDateArr[2]}`)
        }
        return
    }

    const handleBookingSubmit = async () => {
        const newBooking = { startDate: startDate, endDate: endDate }
        let newBookingId
        const res = await dispatch(createNewBooking(id, newBooking))
        console.log(res)
        return history.push('/booking/confirmation')

    }

    useEffect(() => {
        if(!showCalMenuOne || !showCalMenuTwo) return
        const closeMenu = (e) => {
            if(!ulRef.current.contains(e.target)) {
                setShowCalMenuOne(false)
                setShowCalMenuTwo(false)
            }
        }
        document.addEventListener('click', closeMenu)

        return () => document.removeEventListener('click', closeMenu)
    }, [showCalMenuOne, showCalMenuTwo])

    const calendarModal = (
        <div id='booking-component-parent-div'>
            <button onClick={() => setShowModal(false)}>X</button>
            <div id='booking-reserve-buttons-parent'>
                <div>
                    <div>
                        <h3>{lengthOfStay} nights</h3>
                    </div>
                    <div id='top-row-button-div'>
                        {/* <button className={calendarClassName} onClick={() => setShowCalMenuOne === false ? setShowCalMenuOne(false) : setShowCalMenuOne(true)}>Check-In: {startDate.toDateString()} </button> */}
                        <button className={calendarClassName} id='start-date-calendar-button' onClick={openMenuOne}><span id='check-in-text-span'>Check-In:</span> <p id='check-in-p-tag'>{typeof startDate === "object" ? startDate.toDateString() : startDate}</p> </button>

                        <button className={calendarClassName} id='end-date-calendar-button' onClick={openMenuTwo}><span id='check-out-text-span'>Check-Out:</span> <p id='check-out-p-tag'>{typeof endDate === "object" ? endDate.toDateString() : endDate}</p> </button>
                    </div>
                </div>
                <div id='calendar-menu-dropdown-div' ref={ulRef}>
                    <div id='calendar-menu-dropdown-one'>
                {showCalMenuOne && <Calendar onChange={(date) => {
                    setLengthOfStay(getLengthOfStay(date, endDate))
                    setStartDate(date)
                    setShowCalMenuOne(false)
                    return
                }} value={startDate} />}

                    </div>
                    <div id='calendar-menu-dropdown-two'>
                {showCalMenuTwo && <Calendar onChange={(date) => {
                    setLengthOfStay(getLengthOfStay(startDate, date))
                    setEndDate(date)
                    setShowCalMenuTwo(false)
                    return
                }} value={endDate}/>}

                    </div>
                </div>
                <div id='confirm-or-cancel-booking'>
                    <button id='cancel-booking-button'>Clear Dates</button>
                    <button id='confirm-booking-button' onClick={handleDatesChangeSubmit}>Save</button>
                </div>
            </div>
        </div>
    )

    const guestsModal = (
        <div>
            <div>
                <h3>Guests</h3>
            </div>
            <div>
                <p>This place has a maximum of 10 guests, not including infants. Pets aren't allowed.</p>
            </div>
            <div>
                <div>
                    <div>
                        <p>Adults</p>
                        <p>Age 13+</p>
                    </div>
                    <div>
                        <div onClick={() => {
                            changeGuests("Adults", "+")
                        }}>
                            <p>+</p>
                        </div>
                        <div>
                            {adultsNum}
                        </div>
                        <div onClick={() => {
                            changeGuests("Adults", "-")
                        }}>
                            <p>-</p>
                        </div>
                    </div>
                </div>
                <div>
                    <div>
                        <p>Children</p>
                        <p>Ages 2-12</p>
                    </div>
                    <div>
                        <div onClick={() => {
                            changeGuests("Children", "+")
                        }}>
                            <p>+</p>
                        </div>
                        <div>
                            {childrenNum}
                        </div>
                        <div onClick={() => {
                            changeGuests("Children", "-")
                        }}>
                            <p>-</p>
                        </div>
                    </div>
                </div>
                <div>
                    <div>
                        <p>Infants</p>
                        <p>Under 2</p>
                    </div>
                    <div>
                        <div onClick={() => {
                            changeGuests("Infants", "+")
                        }}>
                            <p>+</p>
                        </div>
                        <div>
                            {infantsNum}
                        </div>
                        <div onClick={() => {
                            changeGuests("Infants", "-")
                        }}>
                            <p>-</p>
                        </div>
                    </div>
                </div>
                <div>
                    <div>
                        <p>Pets</p>
                        {/* <p>Age 13+</p> */}
                    </div>
                    <div>
                        <div onClick={() => {
                            changeGuests("Pets", "+")
                        }}>
                            <p>+</p>
                        </div>
                        <div>
                            {petsNum}
                        </div>
                        <div onClick={() => {
                            changeGuests("Pets", "-")
                        }}>
                            <p>-</p>
                        </div>
                    </div>
                </div>
            </div>
            <div>
                <button onClick={() => {
                    setShowGuestsModal(false)
                }}>Cancel</button>
                <button onClick={() => {
                    if(totalGuestsNum === 0) {
                        setGuestsNumError("You need at least one guest to schedule a booking.")
                        return
                    } else {
                        setBeginningGuestsNum(totalGuestsNum)
                        setShowGuestsModal(false)
                        return
                    }
                }}>Save</button>
            </div>
        </div>
    )



    return (
        <div id='booking-page-wrapper'>
            <div id='booking-icon-and-header'>
                <img id='booking-page-left-arrow' src="https://i.ibb.co/p1WmzF2/left-arrow-icon.png" alt="left-arrow-icon" border="0" />
                <h1 id='bp-confirm-and-pay-header'>Confirm and pay</h1>
            </div>
            <div id='booking-page-main-content'>
                <div id='booking-page-left-side'>
                    <div id='bp-left-your-trip'>
                        <div>
                            <h2 className='bp-h2-tag'>Your trip</h2>
                        </div>
                        <div id='your-trip-section'>
                            <div id='your-trip-dates-section'>
                                <div>
                                    <p id='bp-dates-text' className='booking-page-section-p'>Dates</p>
                                    <p id='bp-date-range-text' className='booking-page-section-p'>{defaultDates}</p>
                                </div>
                                <div>
                                    <p id='bp-edit-dates' className='booking-page-section-p' onClick={() => setShowModal(true)}>Edit</p>
                                </div>
                                {showModal && (
                                    <div>
                                        {calendarModal}
                                    </div>
                                )}
                            </div>
                            <div id='booking-guests-section'>
                                <div>
                                    <p id='bp-guests-text' className='booking-page-section-p'>Guests</p>
                                    <p id='bp-guests-num' className='booking-page-section-p'>{beginningGuestsNum} {beginningGuestsNum === 1 ? "guest" : "guests"}</p>
                                </div>
                                <div>
                                    <p id='bp-edit-guests' className='booking-page-section-p' onClick={() => setShowGuestsModal(true)}>Edit</p>
                                </div>
                                {showGuestsModal && (
                                    <div>
                                        {guestsModal}
                                    </div>
                                )}
                            </div>
                        </div>
                    </div>
                    <div id='trav-insurance-section'>
                        <div>
                            <h2 className='bp-h2-tag'>Travel Insurance</h2>
                        </div>
                        <div id='trav-ins-top-container'>
                            <div>
                                <p id='peace-of-mind-text' className='booking-page-section-p'>Add peace of mind for $138</p>
                                <p id='only-avail-while-text' className='booking-page-section-p'>Only available while booking.</p>
                            </div>
                            <div>
                                {isTravelInsurance ? (<img className='travel-insurance-icon' onClick={() => setIsTravelInsurance(false)} src="https://i.ibb.co/60F3sW9/black-check-box-with-white-check.png" alt="black-check-box-with-white-check" border="0" />) : (<img className='travel-insurance-icon' onClick={() => setIsTravelInsurance(true)} src="https://i.ibb.co/xY7Zhcf/square.png" alt="square" border="0" />)}
                            </div>
                        </div>
                        <div id='trav-ins-bot-container'>
                            <p id='get-reimbursed-text' className='booking-page-section-p'>Get reimbursed if you need to cancel due to illness, flight delays, and more.</p>
                            {/* <p>What's covered</p> */}
                        </div>
                    </div>
                    <div id='right-cancellation-section'>
                        <div>
                            <h2 className='bp-h2-tag'>Cancellation policy</h2>
                        </div>
                        <div>
                            <p id='cancel-before-text' className='booking-page-section-p'>Cancel before check-in on {startDate} for a partial refund. After that, your refund depends on when you cancel.</p>
                        </div>
                    </div>
                    <div id='bp-ground-rules-section'>
                        <div>
                            <h2 className='bp-h2-tag'>Ground rules</h2>
                        </div>
                        <div>
                            <p className='booking-page-section-p'>We ask every guest to remember a few simple things about what makes a great guest.</p>
                            <ul>
                                <li>Follow the house rules</li>
                                <li>Treat your Host's home like your own.</li>
                            </ul>
                        </div>
                    </div>
                    <div id='bp-submit-button-container'>
                        <button id='bp-submit-button' onClick={handleBookingSubmit}>Confirm Booking</button>
                    </div>
                </div>
                <div id='bp-right-wrapper'>
                    <div id='booking-page-right-side'>
                        <div id='bp-right-inner'>
                            <div id='bp-right-top-section'>
                                <div>
                                    {previewImage && (<img id='booking-page-spot-prev' src={previewImage.url} alt='spot preview' />)}
                                </div>
                                <div id='bp-right-bot-section'>
                                    <div className='bp-spot-name'>
                                        {spot && spot?.name && (<p>{spot?.name}</p>)}
                                    </div>
                                    <div className='bp-spot-reviews'>
                                        <i id='bp-star-favicon' className="fa-solid fa-star" style={{color: "#000000"}} />
                                        <p>{spot?.avgRating} <span id='bp-spot-reviews-span'>({spot.numReviews} reviews)</span></p>
                                    </div>
                                </div>
                            </div>
                            <div id='bp-right-mid-section'>
                                <div id='bp-right-mid-section-header'>
                                    <h2>Price details</h2>
                                </div>
                                <div className='booking-cost-info-section' >
                                    <p>{spot?.price} x {lengthOfStay} nights</p>
                                    <p>${spot?.price * lengthOfStay}.00</p>
                                </div>
                                <div className='booking-cost-info-section'>
                                    <p>Cleaning fee</p>
                                    <p>$200.00</p>
                                </div>
                                <div className='booking-cost-info-section'>
                                    <p>Lairbnb service fee</p>
                                    <p>$250</p>
                                </div>
                                <div className='booking-cost-info-section'>
                                    <p>Taxes</p>
                                    <p>$111.00</p>
                                </div>
                                {isTravelInsurance ? (
                                <div className='booking-cost-info-section'>
                                    <p>Travel Insurance</p>
                                    <p>$138</p>
                                </div>
                                ) : ''}
                            </div>
                            <div id='bp-right-bottom-section' className='booking-cost-info-section'>
                                <p>Total (USD)</p>
                                <p>${(spot?.price * lengthOfStay) + 200 + 250 + 110}.00</p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default BookingPage;
