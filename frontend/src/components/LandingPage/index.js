import * as spotActions from '../../store/spots.js'
import { useEffect, useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import './LandingPage.css'
import SpotCard from '../SpotCards/index.js'
import { Redirect, useHistory } from 'react-router-dom'

function LandingPage() {
    const dispatch = useDispatch()
    const allSpots = useSelector(state => state.spots.allSpots)
    const [isLoaded, setIsLoaded] = useState(false)
    useEffect(() => {
        dispatch(spotActions.fetchSpots()).then(() => setIsLoaded(true))
    }, [dispatch, allSpots])
    // const lpSpotData = Object.values(spotData)
    // const lpFinal = lpSpotData[0]
    let spots
    let final
    if(allSpots) {
        spots = Object.values(allSpots)
        if(spots) {
            final = spots[0]
        }
    } else {
        return <Redirect to='/'/>
    }
        return (
            <div id='landing-page-parent-div'>
                <div id='spot-card-show-div'>
                {isLoaded && final ? final?.map((spot) => (<SpotCard spot={spot} key={spot.id} />)) : (<div>Loading</div>)}
                    {/* placeholder */}
                </div>
            </div>
        )




    // console.log('lpSpotData: ', lpSpotData)
    // if(!final) {
    //     content = (
    //         <>
    //         {lpFinal && lpFinal?.map((spot) => (<SpotCard spot={spot} key={spot.id} />))}
    //         </>
    //         )
    // } else {
    //     <>
    //     {final && final?.map((spot) => (<SpotCard spot={spot} key={spot.id} />))}
    //     </>
    // }



}

export default LandingPage;
