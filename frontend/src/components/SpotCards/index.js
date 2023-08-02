import './SpotCards.css'
import { useState, useRef } from 'react'
import { NavLink } from 'react-router-dom'
// import * as spotActions from '../../store/spots'
// import { useDispatch } from 'react-redux'
import OpenModalButton from '../OpenModalButton'
import DeleteConfirmModal from '../DeleteConfirmModal'

function SpotCard({ spot, user }) {
    // const ref = useRef(null)
    const [tooltipVisibility, setTooltipVisibility] = useState('hidden')
    // const [deletedVis, setDeletedVis] = useState('')
    // const dispatch = useDispatch()
    let rating;
    // console.log(spot)
    if(spot.avgRating === 'NaN') {
        rating = 'New'
    } else {
        rating = spot.avgRating
    }

    let manageButtons;

    // const handleDelete  = (e) => {
    //     e.preventDefault()
    //     return dispatch(spotActions.deleteUserSpot(spot.id, spot)).then(() => setDeletedVis('hidden'))
    // }

    if(user) {
        manageButtons = (
            <div id='manage-spot-buttons'>
            <NavLink exact to={`/spots/${spot.id}/edit`}>
                <button id='manage-spots-update-button'>Update</button>
            </NavLink>
            <OpenModalButton
            id='delete-modal-button'
            buttonText='Delete'
            modalComponent={<DeleteConfirmModal spot={spot} />}
            />
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
        // onClick={() => <Redirect to={`/api/spots/${spot.id}`} />}
        >
            <span className={`tooltip-span-${tooltipVisibility}`}>{spot.name}</span>
            <div id='prev-img-tab'>
                {spot.previewImage && <img src={spot.previewImage} alt={spot.name} />}

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
        </div>
    )
}

export default SpotCard;
