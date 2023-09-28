import { useDispatch, useSelector } from "react-redux";
import { useRef, useState } from 'react'
import { deleteUserBooking, getByUserId } from "../../store/bookings";

const DeleteBookingModal = ({ bookingData, bookingId, onSubmit, onClose }) => {
    const dispatch = useDispatch()
    const modalOverlayRef = useRef()
    const [errors, setErrors] = useState('')
    const sessionUser = useSelector(state => state.session.user)

    const handleDelete = async () => {
        await dispatch(deleteUserBooking(bookingId, bookingData)).then( () => {
            if(errors === '') {
                dispatch(getByUserId(sessionUser.id))
                onSubmit()
            } else {
                return
            }
        }).catch(async(res) => {
            const response = await res.json()
            if (response.message) {
                setErrors(response.message)
                return
            }
        })

    }

    return (
        <>
            <div id='modal-background'  ref={modalOverlayRef}></div>
            <div id='delete-booking-modal-wrapper'>
                <div>
                    <h1 id='confirm-delete-title-text'>Confirm Delete</h1>
                    <p id='confirm-delete-p-text'>Are you sure you want to cancel this trip?</p>
                </div>
                {errors && (<p id='delete-booking-error-text'>{errors === '' ? '' : "Bookings that have been started can't be deleted."}</p>)}
                <div>
                    <div id='cancel-booking-yes-button-div' onClick={handleDelete}>
                        <p id='cancel-booking-confirm-yes-button'>Yes (Cancel Booking)</p>
                    </div>
                    <div id='cancel-booking-no-button-div' onClick={onClose}>
                        <p id='cancel-booking-confirm-no-button'>No (Keep Trip)</p>
                    </div>
                </div>
            </div>
        </>
    )
}

export default DeleteBookingModal;
