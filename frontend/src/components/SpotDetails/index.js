import { useParams } from 'react-router-dom'
import * as spotActions from '../../store/spots.js'
import * as reviewActions from '../../store/reviews'
import { useEffect, useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import './SpotDetails.css'

function SpotDetails() {
    const { spotId } = useParams()
    const dispatch = useDispatch()
    const [haveSpot, setHaveSpot] = useState(false)
    const [haveReviews, setHaveReviews] = useState(false)

    const spot = useSelector(state => state.spots.singleSpot)
    const reviews = useSelector(state => state.reviews)
    const spotReviews = reviews.reviews.Reviews

    // const spotReviews =
    // console.log(reviews)
    // console.log('spot info: ', spot)
    // const spotReviews = reviews.reviews.Reviews
    // console.log('spot reviews: ', spotReviews)


    useEffect(() => {
        dispatch(spotActions.fetchSingleSpot(spotId)).then(setHaveSpot(true))
        // dispatch(reviewActions.getReviewsBySpotId(spotId)).then(setHaveReviews(true))
        // return () => setHaveSpot(false)
    }, [dispatch])

    useEffect(() => {
        dispatch(reviewActions.getReviewsBySpotId(spotId)).then(setHaveReviews(true))
    }, [dispatch, spotId])



    // // console.log(spot)

    let rating;
    let spotImgs;
    let imgOne;
    let imgTwo;
    let imgThree;
    let imgFour;
    let imgFive;
    let ownerFirstName;
    let ownerLastName;
    let numberReviews
    if(haveSpot) {
        if(spot.avgRating === 'NaN') {
            rating = 'New'
        } else {
            rating = spot.avgRating
        }
        spotImgs = spot.SpotImages

        if(spotImgs && spotImgs[0]) {
            imgOne = spotImgs[0].url
        }

        if(spotImgs && spotImgs[1]) {
            imgTwo = spotImgs[1].url
        }
        if(spotImgs && spotImgs[2]) {
            imgThree = spotImgs[2].url
        }
        if(spotImgs&& spotImgs[3]) {
            imgFour = spotImgs[3].url
        }
        if(spotImgs && spotImgs[4]) {
            imgFive = spotImgs[4].url
        }

        ownerFirstName = spot.Owner?.firstName
        ownerLastName = spot.Owner?.lastName

        if(spot.numReviews) {

            if(spot.numReviews === 1) {
                numberReviews = '· 1 review'
            } else if(spot.numReviews === 0) {
                numberReviews = ''
            }
            else {
                numberReviews = `· ${spot.numReviews} reviews`
            }
        }

    }

    return(
        <>
        {spot && (
            <div id='spot-details-parent-div'>
                <div id='title-div'>
                    <h1>{spot?.name}</h1>
                    <p>{spot?.city}, {spot?.state}, {spot?.country}</p>
                </div>
                <div id='spot-images-div'>
                    <div id='preview-img-div'>
                        <img id='preview-image-main' src={imgOne} alt='test spot preview' />
                    </div>
                    <div id='other-spot-images'>
                        {imgTwo && <img className='other-spot-img' src={imgTwo} alt='preview two'/>}
                        {imgThree && <img className='other-spot-img' src={imgThree} alt='preview three'/>}
                        {imgFour && <img className='other-spot-img' src={imgFour} alt='preview four'/>}
                        {imgFive && <img className='other-spot-img' src={imgFive} alt='preview five'/>}
                    </div>
                </div>
                <div id='hosted-by-and-description'>
                    <div id='info-text'>
                        <h2>Hosted by {ownerFirstName} {ownerLastName}</h2>
                        <p>{spot.description}</p>
                    </div>
                    <div id='booking-and-price-div'>
                        <div id='cost-and-review-info'>
                            <div id='cost-per-night'>
                                <p>${spot.price}<span id='per-night'>night</span></p>
                            </div>
                            <div id='review-icon-and-rating'>
                                <i id='star-favicon' className="fa-solid fa-star" style={{color: "#000000"}}></i>  {rating} {numberReviews}
                            </div>
                        </div>
                        <div id='reserve-button'>
                            <button id='reserve-button-inner'>Reserve</button>
                        </div>
                    </div>
                </div>
                <div id='all-reviews-div'>
                    <div id='reviews-header-container'>
                    <i id='star-favicon' className="fa-solid fa-star fa-2xl" style={{color: "#000000"}}></i>
                    <span> {rating} {numberReviews}</span>
                    </div>
                    {spotReviews && spotReviews.map((review) => (
                        <div className='spot-review'>
                            <h3 className='review-user-name'>{review.User.firstName}</h3>
                            <h3 className='review-month-year'>{review.createdAt = new Date().toDateString().split(' ')[1]} {review.createdAt = new Date().toDateString().split(' ')[3]}</h3>
                            <p className='review-inner-text'>{review.review}</p>
                        </div>
                    ))}
                </div>


            </div>
        )}
        </>
    )
}

export default SpotDetails;