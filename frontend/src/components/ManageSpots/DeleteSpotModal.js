// import './DeleteConfirmModal.css'
import React, { useRef } from 'react'
import * as spotActions from '../../store/spots'
import { useDispatch } from 'react-redux'

function DeleteLairModal({ spot, spotId, onClose, onSubmit }) {
    const dispatch = useDispatch()
    const modalOverlayRef = useRef()

    const handleDelete  = (e) => {
        e.preventDefault()
        dispatch(spotActions.deleteUserSpot(spotId, spot)).then(onSubmit)

    }

    return(
        <>
            <div id='modal-background'  ref={modalOverlayRef}></div>
            <div id='confirm-delete-modal-parent'>
                <div id='confirm-delete-modal-text'>
                    <h1 id='confirm-delete-title-text'>Confirm Delete</h1>
                    <p id='confirm-delete-p-text'>Are you sure you want to remove this Lair from the listings?</p>
                </div>
                <div id='delete-spot-yes-button-div'>
                    <button id='delete-spot-confirm-yes-button' onClick={handleDelete}>Yes (Delete Lair)</button>
                </div>
                <div id='delete-spot-no-button-div'>
                    <button id='delete-spot-confirm-no-button' onClick={onClose}>No (Keep Lair)</button>
                </div>
            </div>
        </>
    )

}

export default DeleteLairModal;
