import './DeleteConfirmModal.css'
import React, { useState, useEffect } from 'react'
import * as spotActions from '../../store/spots'
import { useDispatch } from 'react-redux'
import { useModal } from '../../context/Modal.js'

function DeleteConfirmModal({ spot }) {
    const dispatch = useDispatch()
    // const [deletedVis, setDeletedVis] = useState('')
    const [haveElem, setHaveElem] = useState(false)
    const { closeModal } = useModal()

    useEffect(() => {
        const spotCard = document.querySelector(".spot-card-manage-div-for-delete-modal")
        setHaveElem(true)
        console.log(spotCard)
    }, [])

    const handleDelete  = (e) => {
        e.preventDefault()
        return dispatch(spotActions.deleteUserSpot(spot.id, spot)).then(closeModal)
    }

    return(
        <div id='confirm-delete-modal-parent'>
            <div id='confirm-delete-modal-text'>
                <h1 id='confirm-delete-title-text'>Confirm Delete</h1>
                <p id='confirm-delete-p-text'>Are you sure you want to remove this spot from the listings?</p>
            </div>
            <div id='delete-spot-yes-button-div'>
                <button id='delete-spot-confirm-yes-button' onClick={handleDelete}>Yes (Delete Spot)</button>
            </div>
            <div id='delete-spot-no-button-div'>
                <button id='delete-spot-confirm-no-button' onClick={closeModal}>No (Keep Spot)</button>
            </div>
        </div>
    )

}

export default DeleteConfirmModal;