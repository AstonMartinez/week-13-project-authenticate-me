import './EditBooking.css'
import { useParams, useHistory } from 'react-router-dom'
import { useState, useRef, useEffect } from 'react'
import Calendar from 'react-calendar'
// import CalendarModal from './CalendarModal'
import { useDispatch, useSelector } from 'react-redux'
import { getById, updateUserBooking } from '../../store/bookings'
import { fetchSingleSpot } from '../../store/spots'

function EditBookingPage() {
    const modalOverlayRef = useRef()
    const { spotId, bookingId } = useParams()
    const dispatch = useDispatch()
    const history = useHistory()
    const spot = useSelector(state => state.spots.singleSpot)
    const booking = useSelector(state => state.bookings.singleBooking)

    const spotImages = spot.SpotImages

    let previewImage
    if(spot && spotImages) {
        previewImage = spotImages.find(img => img.preview === true)
    } else {
        previewImage = ''
    }

    const checkForIns = () => {
        if(booking && booking.hasTravelIns === "true") {
            return true
        } else {
            return false
        }
    }

    const [isTravelInsurance, setIsTravelInsurance] = useState(checkForIns())
    const [showModal, setShowModal] = useState(false)
    const [adultsNum, setAdultsNum] = useState(booking?.numGuests)
    const [childrenNum, setChildrenNum] = useState(0)
    const [infantsNum, setInfantsNum] = useState(0)
    const [petsNum, setPetsNum] = useState(0)
    const [beginningGuestsNum, setBeginningGuestsNum] = useState(booking?.numGuests)
    const [totalGuestsNum, setTotalGuestsNum] = useState(booking?.numGuests)
    const [guestsNumError, setGuestsNumError] = useState('')
    const [showGuestsModal, setShowGuestsModal] = useState(false)
    const [submitError, setSubmitError] = useState('')

    useEffect(() => {
        dispatch(fetchSingleSpot(spotId))
        dispatch(getById(bookingId))
    }, [dispatch, bookingId, spotId])

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

    const determineMonthLength = (month) => {
        if(month === 'Jan' || month === "01") {
            return 31
        } else if(month === 'Feb' || month === "02") {
            return 28
        } else if(month === 'Mar' || month === "03") {
            return 31
        } else if(month === 'Apr' || month === "04") {
            return 30
        } else if(month === 'May' || month === "05") {
            return 31
        } else if(month === 'Jun' || month === "06") {
            return 30
        } else if(month === 'Jul' || month === "07") {
            return 31
        } else if(month === 'Aug' || month === "08") {
            return 31
        } else if(month === 'Sep' || month === "09") {
            return 30
        } else if(month === 'Oct' || month === "10") {
            return 31
        } else if(month === 'Nov' || month === "11") {
            return 30
        } else if(month === 'Dec' || month === "12") {
            return 31
        }
    }

    const convertDates = (startDate, endDate) => {
        let startDateSplit
        let endDateSplit

        if(typeof startDate === "string") {
            startDateSplit = startDate.split("-")
            // endDateSplit = endDate.split("-")
        } else if(typeof endDate === "object") {
            startDateSplit = startDate.toDateString().split(" ")
            // endDateSplit = endDate.toDateString().split(" ")
        } else {
            startDateSplit = ''
        }

        if(typeof endDate === "string") {
            endDateSplit = endDate.split("-")
        } else if(typeof endDate === "object") {
            endDateSplit = endDate.toDateString().split(" ")
        } else {
            endDateSplit = ''
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

    const initialRange = convertDates(booking?.startDate, booking?.endDate)
    const [stayDateRange, setStayDateRange] = useState(initialRange)


    const getLengthOfStay = () => {
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


    const getCurrDays = (dateInfo) => {
        let dateArr
        let month
        if(typeof dateInfo === "object") {
            dateArr = dateInfo.toDateString()
            month = getMonthNum(dateArr[1])
        } else if(typeof dateInfo === "string") {
            dateArr = dateInfo.split('-')
            month = getMonthString(dateArr[1])
        }
        if(dateArr) {
            const year = dateArr[0]
            const day = dateArr[2]
            const newDateObj = new Date(`${year}-${month}-${day}`)
            return newDateObj.toDateString()
        }
    }

    const changeGuests = (type, plusOrMinus) => {
        const currentTotal = adultsNum + childrenNum + infantsNum + petsNum
        if(type === "Adults") {
            if(plusOrMinus === "+") {
                if(currentTotal < 10) {
                    setAdultsNum(adultsNum + 1)
                    setTotalGuestsNum(currentTotal + 1)
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


    // const defaultDateInfo = getDefaultDates(defaultStart)

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

    // const formatStartDates = (dates) => {
    //     const datesSplit = dates.split(' ')
    //     if(Number(datesSplit[1]) === 1 && Number(datesSplit[3]) === 3) {
    //         const monthString = datesSplit[0]
    //         const monthNum = getMonthNum(monthString)
    //         const day = datesSplit[1]
    //         let year
    //         if(monthString === "Jan") {
    //             year = new Date().getFullYear() + 1
    //         } else {
    //             year = new Date().getFullYear()
    //         }
    //         const newDateObj = new Date(`${year}-${monthNum}-${day}`)
    //         return newDateObj.toDateString()
    //     } else {
    //         const monthString = datesSplit[0]
    //         const monthNum = getMonthNum(monthString)
    //         const day = datesSplit[1]
    //         const year = new Date().getFullYear()
    //         const newDateObj = new Date(`${year}-${monthNum}-${day}`)
    //       	return newDateObj.toDateString()
    //     }
    // }

    // const formatEndDates = (dates) => {
    //     const datesSplit = dates.split(' ')
    //     if(Number(datesSplit[1]) === 1 && Number(datesSplit[3]) === 3) {
    //         const monthString = datesSplit[0]
    //         const monthNum = getMonthNum(monthString)
    //         const day = datesSplit[3]
    //         let year
    //         if(monthString === "Jan") {
    //             year = new Date().getFullYear() + 1
    //         } else {
    //             year = new Date().getFullYear()
    //         }
    //         const newDateObj = new Date(`${year}-${monthNum}-${day}`)
    //         return newDateObj.toDateString()
    //     } else {
    //         const monthString = datesSplit[0]
    //         const monthNum = getMonthNum(monthString)
    //         const day = datesSplit[3]
    //         const year = new Date().getFullYear()
    //         const newDateObj = new Date(`${year}-${monthNum}-${day}`)
    //       	return newDateObj.toDateString()
    //     }
    // }
    // const formattedStartDate = formatStartDates(defaultDateInfo)
    // const formattedEndDate = formatEndDates(defaultDateInfo)

    // const [defaultDates, setDefaultDates] = useState(defaultDateInfo)
    // const [checkin, setCheckin] = useState('')
    // const [checkout, setCheckout] = useState('')
    const formattedStartDate = getCurrDays(booking?.startDate)
    const formattedEndDate = getCurrDays(booking?.endDate)

    const [startDate, setStartDate] = useState(formattedStartDate)
    const [endDate, setEndDate] = useState(formattedEndDate)
    const [lengthOfStay, setLengthOfStay] = useState(booking?.stayLength)

    const ulRef = useRef()
    const calendarClassName = "calendar-dropdown"

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
            setStayDateRange(`${startDateArr[1]} ${startDateArr[2]} - ${endDateArr[2]}`)
        } else {
            setStayDateRange(`${startDateArr[1]} ${startDateArr[2]} - ${endDateArr[1]} ${endDateArr[2]}`)
        }
        const newLength = getLengthOfStay(startDate, endDate)
        setLengthOfStay(newLength)
        setShowModal(false)
        return
    }

    const handleBookingSubmit = () => {
        let hasIns
        if(isTravelInsurance) {
            hasIns = "true"
        } else {
            hasIns = "false"
        }

        const updatedBooking = {
            startDate: startDate,
            endDate: endDate,
            numGuests: totalGuestsNum,
            hasTravelIns: hasIns,
            stayLength: lengthOfStay
        }

        dispatch(updateUserBooking(bookingId, updatedBooking)).then(async () => {
            const bookingId = booking.id
            if(booking && booking.id) {
                return history.push(`/booking/${bookingId}/edited/confirmation`)
            }
        }).catch(async err => {
            if(err) {
                console.log(err)
                setSubmitError(err)
                return
            }
        })

    }

    // useEffect(() => {
    //     if(!showCalMenuOne || !showCalMenuTwo) return
    //     const closeMenu = (e) => {
    //         if(!ulRef.current.contains(e.target)) {
    //             setShowCalMenuOne(false)
    //             setShowCalMenuTwo(false)
    //         }
    //     }
    //     document.addEventListener('click', closeMenu)

    //     return () => document.removeEventListener('click', closeMenu)
    // }, [showCalMenuOne, showCalMenuTwo])

    const calendarModal = (
        <>
            <div id='modal-background' ref={modalOverlayRef} onClick={() => setShowModal(false)}></div>
            <div id='booking-component-parent-div'>
                <button id='cal-modal-x-button' onClick={() => setShowModal(false)}>X</button>
                <div id='booking-reserve-buttons-parent'>
                    <div id='cal-modal-top-cont'>
                        <div id='top-row-nights-container'>
                            <h3>{lengthOfStay} nights</h3>
                        </div>
                        <div id='top-row-button-div'>
                            <button className={calendarClassName} id='start-date-calendar-button' ><span id='check-in-text-span'>CHECK-IN:</span> <p id='check-in-p-tag'>{typeof startDate === "object" ? startDate.toDateString() : startDate}</p> </button>
                            <button className={calendarClassName} id='end-date-calendar-button'><span id='check-out-text-span'>CHECK-OUT:</span> <p id='check-out-p-tag'>{typeof endDate === "object" ? endDate.toDateString() : endDate}</p> </button>
                        </div>
                    </div>
                    <div id='check-in-out-span-container'>
                        <span id='check-in-span'>Check-In</span>
                        <span id='check-out-span'>Check-Out</span>
                    </div>
                    <div id='calendar-menu-dropdown-div' ref={ulRef}>
                        <div id='calendar-menu-dropdown-one'>
                            {<Calendar onChange={setStartDate} value={startDate} />}
                        </div>
                        <div id='calendar-menu-dropdown-two'>
                            {<Calendar onChange={setEndDate} value={endDate}/>}
                        </div>
                    </div>
                    <div id='confirm-or-cancel-booking'>
                        <button id='cancel-booking-button'>Clear Dates</button>
                        <button id='confirm-booking-button' onClick={handleDatesChangeSubmit}>Save</button>
                    </div>
                </div>
            </div>
        </>
    )

    const guestsModal = (
        <>
        <div id='modal-background' ref={modalOverlayRef} onClick={() => setShowModal(false)}></div>
        <div id='edit-guests-modal-wrapper'>
            <div>
                <h3>Guests</h3>
            </div>
            <div>
                <p>This place has a maximum of 10 guests, not including infants. Pets aren't allowed.</p>
            </div>
            <div id='plus-minus-sections-container'>
                <div id='plus-minus-section'>
                    <div>
                        <p className='guests-type-text'>Adults</p>
                        <p className='guests-sub-text'>Age 13+</p>
                    </div>
                    <div className='plus-minus'>

                        <div className='minus-div' onClick={() => {
                            changeGuests("Adults", "-")
                        }}>
                            <p>-</p>
                        </div>
                        <div className='num-div'>
                            <p>{adultsNum}</p>
                        </div>
                        <div className='plus-div' onClick={() => {
                            changeGuests("Adults", "+")
                        }}>
                            <p>+</p>
                        </div>
                    </div>
                </div>
                <div id='plus-minus-section'>
                    <div>
                        <p className='guests-type-text'>Children</p>
                        <p className='guests-sub-text'>Ages 2-12</p>
                    </div>
                    <div className='plus-minus'>

                        <div className='minus-div' onClick={() => {
                            changeGuests("Children", "-")
                        }}>
                            <p>-</p>
                        </div>
                        <div className='num-div'>
                            <p>{childrenNum}</p>
                        </div>
                        <div className='plus-div' onClick={() => {
                            changeGuests("Children", "+")
                        }}>
                            <p>+</p>
                        </div>
                    </div>
                </div>
                <div id='plus-minus-section'>
                    <div>
                        <p className='guests-type-text'>Infants</p>
                        <p className='guests-sub-text'>Under 2</p>
                    </div>
                    <div className='plus-minus'>

                        <div className='minus-div' onClick={() => {
                            changeGuests("Infants", "-")
                        }}>
                            <p>-</p>
                        </div>
                        <div className='num-div'>
                            <p>{infantsNum}</p>
                        </div>
                        <div className='plus-div' onClick={() => {
                            changeGuests("Infants", "+")
                        }}>
                            <p>+</p>
                        </div>
                    </div>
                </div>
                <div id='plus-minus-section'>
                    <div>
                        <p className='guests-type-text'>Pets</p>
                    </div>
                    <div className='plus-minus'>

                        <div className='minus-div' onClick={() => {
                            changeGuests("Pets", "-")
                        }}>
                            <p>-</p>
                        </div>
                        <div className='num-div'>
                            <p>{petsNum}</p>
                        </div>
                        <div className='plus-div' onClick={() => {
                            changeGuests("Pets", "+")
                        }}>
                            <p>+</p>
                        </div>
                    </div>
                </div>
            </div>
            <div id='guests-modal-button-container'>
                {guestsNumError && (<p>{guestsNumError}</p>)}
                <button id='guests-modal-cancel-button' onClick={() => {
                    setShowGuestsModal(false)
                }}>Cancel</button>
                <button id='guests-modal-save-button' onClick={() => {
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
        </>
    )



    return (
        <div id='booking-page-wrapper'>
            <div id='booking-icon-and-header'>
                <img id='booking-page-left-arrow' src="https://i.ibb.co/p1WmzF2/left-arrow-icon.png" alt="left-arrow-icon" border="0" />
                <h1 id='bp-confirm-and-pay-header'>Edit booking</h1>
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
                                    <p id='bp-date-range-text' className='booking-page-section-p'>{stayDateRange}</p>
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
                                    <p id='bp-guests-num' className='booking-page-section-p'>{totalGuestsNum} {totalGuestsNum === 1 ? "guest" : "guests"}</p>
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
                                <p id='only-avail-while-text' className='booking-page-section-p'>Cannot be changed after initial booking.</p>
                            </div>
                            <div>
                                {isTravelInsurance ? (<img className='travel-insurance-icon' src="https://i.ibb.co/60F3sW9/black-check-box-with-white-check.png" alt="black-check-box-with-white-check" border="0" />) : (<img className='travel-insurance-icon' src="https://i.ibb.co/xY7Zhcf/square.png" alt="square" border="0" />)}
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
                            <p id='cancel-before-text' className='booking-page-section-p'>Cancel before check-in on {typeof startDate === "object" ? startDate.toDateString() : startDate} for a partial refund. After that, your refund depends on when you cancel.</p>
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
                        {submitError && (<p>{submitError}</p>)}
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
                                        <p>{spot?.avgRating !== 'NaN' ? spot?.avgRating : "New"} <span id='bp-spot-reviews-span'>({spot.numReviews} reviews)</span></p>
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

export default EditBookingPage;
