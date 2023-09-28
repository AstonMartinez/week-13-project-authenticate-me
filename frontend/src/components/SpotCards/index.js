import './SpotCards.css'
import { useState } from 'react'
import { NavLink } from 'react-router-dom'
import OpenModalButton from '../OpenModalButton'
import DeleteConfirmModal from '../DeleteConfirmModal'
import DeleteLairModal from '../ManageSpots/DeleteSpotModal'
import { useDispatch, useSelector } from 'react-redux'
import { fetchUserSpots } from '../../store/spots'

function SpotCard({ spot, user }) {
    const dispatch = useDispatch()
    const sessionUser = useSelector(state => state.session.user)
    const [tooltipVisibility, setTooltipVisibility] = useState('hidden')
    const [showDeleteModal, setShowDeleteModal] = useState(false)

    let rating;

    if(spot.avgRating === 'NaN') {
        rating = 'New'
    } else {
        rating = spot.avgRating
    }

    let manageButtons;

    if(user) {
        manageButtons = (
            <div id='manage-spot-buttons'>
            <NavLink exact to={`/spots/${spot.id}/edit`}>
                <button id='manage-spots-update-button'>Update</button>
            </NavLink>
                <button id='manage-spots-delete-button' onClick={() => setShowDeleteModal(true)}>
                    Delete
                </button>
            </div>
        )
    } else {
        manageButtons = ''
    }

    return (
        <div id='spot-card-manage-div-for-delete-modal'>
        <NavLink to={`/spots/${spot.id}`}>
        <div className='spot-card-parent-div'
        id={`spot-card-number-${spot.id}`}
        onMouseEnter={() => setTooltipVisibility('visible')}
        onMouseLeave={() => setTooltipVisibility('hidden')}
        >
            <span className={`tooltip-span-${tooltipVisibility}`}>{spot.name}</span>
            <div id='prev-img-tab'>
                {spot.previewImage && <img className='spot-card-img-elem' src={spot.previewImage} alt={spot.name} />}

            </div>
            <div id='spot-info-div'>
                <div id='spot-info-text'>
                <p id='city-state-text'>{spot.city}, {spot.state}</p>
                <p id='price-text'><span>${spot.price}</span> night</p>
                </div>
                <div id='rating-icon-div'>
                <i id='star-favicon' className="fa-solid fa-star" style={{color: "#000000"}}></i>{rating}
                </div>
            </div>

        </div>
        </NavLink>
        {manageButtons}
        {showDeleteModal && (
            <DeleteLairModal
                spot={spot}
                spotId={spot.id}
                onClose={() => {
                    setShowDeleteModal(false)
                    dispatch(fetchUserSpots())
                }}
                onSubmit={() => {
                    setShowDeleteModal(false)
                    dispatch(fetchUserSpots())
                }}
            />
        )}
        </div>
    )
}

export default SpotCard;
