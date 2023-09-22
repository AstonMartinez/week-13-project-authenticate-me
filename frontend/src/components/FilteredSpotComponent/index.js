import SpotCard from "../SpotCards"
import { useDispatch, useSelector } from "react-redux"
import { useState, useEffect } from "react"
import * as spotActions from '../../store/spots'
import { useParams } from "react-router-dom"
import './FilteredSpotComponent.css'

function FilteredSpotComponent() {
    const dispatch = useDispatch()
    const { tag } = useParams()
    const filtered = useSelector(state => state.spots.allSpots)
    const [errors, setErrors] = useState({})

    useEffect(() => {
        dispatch(spotActions.fetchFilteredSpots(tag)).catch(() => {
            setErrors({ message: "Sorry, we couldn't find any lairs matching this tag!"})
        })
    }, [dispatch,tag])

    let spots
    let final
    if(filtered) {
        spots = Object.values(filtered)
        if(spots) {
            final = spots[0]
        }
    }

    return (
        <div id='landing-page-parent-div'>
            {errors && <p>{errors}</p>}
            <div id='spot-card-show-div'>
            {final ? final?.map((spot) => (<SpotCard spot={spot} key={spot.id} />)) : (<div>Loading</div>)}
            </div>
        </div>
    )
}

export default FilteredSpotComponent;
