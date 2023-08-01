import './SpotCards.css'
import { useState } from 'react'
import { NavLink } from 'react-router-dom'

function SpotCard({ spot }) {
    const [tooltipVisibility, setTooltipVisibility] = useState('hidden')
    let rating;
    if(spot.avgRating === 'NaN') {
        rating = 'New'
    } else {
        rating = spot.avgRating
    }


    return (
        <NavLink to={`/spots/${spot.id}`}>
        <div id='spot-card-parent-div'
        onMouseEnter={() => setTooltipVisibility('visible')}
        onMouseLeave={() => setTooltipVisibility('hidden')}
        // onClick={() => <Redirect to={`/api/spots/${spot.id}`} />}
        >
            <span className={`tooltip-span-${tooltipVisibility}`}>{spot.name}</span>
                {spot.previewImage && <img src={spot.previewImage} alt={spot.name} />}
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
    )
}

export default SpotCard;
