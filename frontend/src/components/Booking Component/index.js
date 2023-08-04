import Calendar from 'react-calendar'
import { useState } from 'react'
import './Booking.css'

function Booking() {
    // const [currDate, setCurrDate] = useState(new Date())
    const [startDate, setStartDate] = useState(new Date())
    const [endDate, setEndDate] = useState(new Date())
    return (
        <div id='booking-component-parent-div'>
            <h1 id='booking-header-text'>Choose a start & end date</h1>
            <div className="calendar-container" id='start-date-container'>
            <Calendar onChange={setStartDate} value={startDate}/>
            </div>
            <div className="calendar-container" id='end-date-container'>
            <Calendar onChange={setEndDate} value={endDate}/>
            </div>
            <div className="text-center">
            <p>
                Selected start date: {startDate.toDateString()}
            </p>
            <p>
                Selected end date: {endDate.toDateString()}
            </p>
            </div>
      </div>
    )
}

export default Booking;
