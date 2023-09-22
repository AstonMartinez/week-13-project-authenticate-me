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
    // console.log(filtered)
    // const spots = Object.values(filtered)
    // console.log(spots)
    // const final = spots[0]
    let content
    const [haveSpots, setHaveSpots] = useState(false)
    const [errors, setErrors] = useState({})
    useEffect(() => {
        dispatch(spotActions.fetchFilteredSpots(tag)).then(async() => {
            setHaveSpots(true)
        }).catch(() => {
            setErrors({ message: "Sorry, we couldn't find any lairs matching this tag!"})
        })
    }, [dispatch,tag])

    // console.log('spots: ', spots)
    // console.log('filtered', filtered)

    let spots
    let final
    if(filtered) {
        spots = Object.values(filtered)
        if(spots) {
            final = spots[0]
        }
    }
    // else {
    //     return <Redirect to='/'/>
    // }



    // if(filtered.length === 0) {
    //     // console.log(errors)
    //     // console.log('yep, working')
    //     content = (
    //         <div id='tag-not-found-div'>
    //             <h1 id='tag-not-found-text'>Sorry, we couldn't find any lairs matching this tag!</h1>
    //             {/* <p id='test-text'>This text is showing</p> */}
    //             {/* <i class="fa-sharp fa-light fa-face-anguished fa-2xl" style={{color: "#7c7e7f"}}/> */}
    //             <i className="fa-regular fa-face-frown fa-2xl" style={{color: "#7c7e7f"}} />
    //         </div>
    //     )
    //     // console.log('content: ', content)
    // } else {
    //     content = (
    //     <div id='filtered-component-parent-div'>
    //         <div id='filtered-spot-card-show-div'>
    //             {spots && spots.map((spot) => (
    //                 <div className='filtered-individual-spot-card'>
    //                     <SpotCard spot={spot} key={spot.id} />
    //                 </div>
    //             ))}
    //         </div>
    //     </div>
    //     )

    // }

    // if(spots && haveSpots){
    // }

    // return (
    //     <div id="filtered-spot-wrapper-div">
    //     {/* <div>Placeholder</div> */}
    //     {content}
    //     </div>
    // )
    return (
        <div id='landing-page-parent-div'>
            <div id='spot-card-show-div'>
            {final ? final?.map((spot) => (<SpotCard spot={spot} key={spot.id} />)) : (<div>Loading</div>)}
                {/* placeholder */}
            </div>
        </div>
    )
}

export default FilteredSpotComponent;
