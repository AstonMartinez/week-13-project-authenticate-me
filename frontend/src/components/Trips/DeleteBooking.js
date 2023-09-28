import React, { useState } from 'react'
import { useDispatch } from 'react-redux'
import DeleteBookingModal from './DeleteBookingModal'

function DeleteBooking({booking}) {
    const [showModal, setShowModal] = useState(false)
    const [selectedBooking, setSelectedBooking] = useState(null)
    const dispatch = useDispatch()

    const handleOpenModal = (booking) => {
        setSelectedBooking(booking)
        setShowModal(true)
    }

    const handleCloseModal = () => {
        setShowModal(false)
        setSelectedBooking(null)
    }

    return (
        <>
            {showModal && (
                <DeleteBookingModal
                    onClose={handleCloseModal}
                />
            )}
        </>
    )
}

export default DeleteBooking;
