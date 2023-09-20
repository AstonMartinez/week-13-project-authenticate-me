import React, { useState } from 'react'
import { useDispatch } from 'react-redux'
import UpdateReviewModal from './UpdateReviewModal'
import DeleteConfirmModal from '../DeleteConfirmModal'

function UpdateDeleteDaily({reviewId, type}) {
    const [showModal, setShowModal] = useState(false)
    const [selectedReview, setSelectedReview] = useState(null)
    const dispatch = useDispatch()

    const handleOpenModal = (review) => {
        setSelectedReview(review)
        setShowModal(true)
    }

    const handleCloseModal = () => {
        setShowModal(false)
        selectedReview(null)
    }

    return (
        <>
            {showModal && type === 'update' (
                <UpdateReviewModal
                    onClose={handleCloseModal}
                />
            )}

            {showModal && type === 'delete' (
                <DeleteConfirmModal
                    onClose={handleCloseModal}
                />
            )}
        </>
    )
}

export default UpdateDeleteDaily;
