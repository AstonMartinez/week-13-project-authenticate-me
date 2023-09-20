import { useParams } from 'react-router-dom'
import * as spotActions from '../../store/spots.js'
import * as reviewActions from '../../store/reviews'
import * as spotImageActions from '../../store/spotimages'
import { useEffect, useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import './SpotDetails.css'
import OpenModalButton from '../OpenModalButton'
import ReviewModal from '../ReviewModal/index.js'
import DeleteReviewModal from '../DeleteReviewModal/index.js'

function SpotDetails() {
    const { spotId } = useParams()
    const dispatch = useDispatch()
    const [haveSpot, setHaveSpot] = useState(false)
    const [havePics, setHavePics] = useState(false)
    const [showModal, setShowModal] = useState(false)
    const [modalType, setModalType] = useState(null)
    const [selectedReview, setSelectedReview] = useState(null)

    // const history = useHistory()


    // const [bookingActive, setBookingActive] = useState(false)

    let spotReviews

    const spot = useSelector(state => state.spots.singleSpot)
    const reviews = useSelector(state => state.reviews)
    const sessionUser = useSelector(state => state.session.user)
    const allSpots = useSelector(state => state.spots.allSpots)
    // const currSpotImgs = useSelector(state => state.Spot.spotImgs)
    // console.log(currSpotImgs)

    // console.log('history: ', history)
    // if(!spot.SpotImages) {
    //     history.push(`/api/spots/${spotId}`)
    // }

    spotReviews = reviews.reviews.Reviews



    const reviewCompare = (a, b) => {
        if(a.updatedAt > b.updatedAt) {
            return -1
        }
        if(a.updatedAt < b.updatedAt) {
            return 1
        }
        return 0
    }

    let sortedReviews;

    if(spotReviews?.length) {
        sortedReviews = spotReviews.toSorted(reviewCompare)
    }

    const ownerId = spot.ownerId


    useEffect(() => {
        dispatch(spotActions.fetchSingleSpot(spotId))
        dispatch(reviewActions.getReviewsBySpotId(spotId))
        dispatch(spotImageActions.fetchSpotImages(spotId))
        dispatch(spotActions.fetchSpots())
    }, [dispatch])

    // if(!spot.SpotImages) {
    //     dispatch(spotActions.fetchSingleSpot(spotId).then(setHaveSpot(true)))
    // }

    let rating;
    let spotImgs;
    let imgOne;
    let imgTwo;
    let imgThree;
    let imgFour;
    let imgFive;
    let ownerFirstName;
    let ownerLastName;
    let numberReviews;
    let reviewButton;
    if(spot) {
        if(spot?.avgRating === 'NaN') {
            rating = 'New'
            spotReviews = ''
            sortedReviews = ''
            if(sessionUser && sessionUser?.id !== ownerId) {
                reviewButton = (
                    <div id='review-button-parent-div'>
                        <OpenModalButton
                        id='review-modal-button'
                        className='.modal-buttons'
                        buttonText='Post Your Review'
                        modalComponent={<ReviewModal spotId={spotId} />}
                         />
                        <p>Be the first to post a review!</p>
                    </div>
                )
            }
        } else {
            rating = spot.avgRating
            if((sessionUser && sessionUser.id !== ownerId) && !spotReviews?.find(review => review.userId === sessionUser.id)) {
                reviewButton = (
                    <div id='review-button-parent-div'>
                        <button onClick={() => {
                            setShowModal(true)
                            setModalType("create")
                        }}>Post Your Review</button>
                        {/* <OpenModalButton
                        id='review-modal-button'
                        className='.modal-buttons'
                        buttonText='Post Your Review'
                        modalComponent={<ReviewModal spotId={spotId} />} /> */}
                    </div>
                )

            } else {
                reviewButton = ''
            }
        }
        spotImgs = spot.SpotImages

                if(spotImgs && spotImgs[0].url) {
                    imgOne = spotImgs[0].url
                }
                if(spotImgs && spotImgs[1]) {
                    imgTwo = spotImgs[1].url
                }
                if(spotImgs && spotImgs[2]) {
                    imgThree = spotImgs[2].url
                }
                if(spotImgs && spotImgs[3]) {
                    imgFour = spotImgs[3].url
                }
                if(spotImgs && spotImgs[4]) {
                    imgFive = spotImgs[4].url
                }





        // if(spotImgs && spotImgs[0]) {
        //     imgOne = spotImgs[0].url

        // }


        // if(spotImgs && spotImgs[0]) {
        //     imgTwo = spotImgs[0].url
        // }
        // if(spotImgs && spotImgs[1]) {
        //     imgThree = spotImgs[1].url
        // }
        // if(spotImgs&& spotImgs[2]) {
        //     imgFour = spotImgs[2].url
        // }
        // if(spotImgs && spotImgs[3]) {
        //     imgFive = spotImgs[3].url
        // }

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
                        <div id='optional-img-one'>
                            {imgTwo && <img className='other-spot-img' src={imgTwo} alt='preview two'/>}
                        </div>
                        <div id='optional-img-two'>
                            {imgThree && <img className='other-spot-img' src={imgThree} alt='preview three'/>}
                        </div>
                        <div id='optional-img-three'>
                            {imgFour && <img className='other-spot-img' src={imgFour} alt='preview four'/>}
                        </div>
                        <div id='optional-img-four'>
                            {imgFive && <img id='optional-img-four' className='other-spot-img' src={imgFive} alt='preview five'/>}
                        </div>
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
                            <button id='reserve-button-inner'
                            // onClick={() => bookingActive ? setBookingActive(false) : setBookingActive(true)}
                            onClick={() => alert('Feature coming soon.')}
                            >Reserve</button>
                        </div>
                        {/* <div id='booking-component-container'>
                                {bookingActive && (
                                    <div>
                                        <Booking />
                                    </div>
                                )}
                        </div> */}
                    </div>
                </div>
                <div id='all-reviews-div'>
                    <div id='reviews-header-container'>
                    <i id='star-favicon' className="fa-solid fa-star fa-2xl" style={{color: "#000000"}}></i>
                    <span> {rating} {numberReviews}</span>
                    {reviewButton}
                    </div>
                    {sortedReviews && sortedReviews.map((review) => (
                        <div className='spot-review'>
                            <h3 className='review-user-name'>{review.User.firstName}</h3>
                            <h3 className='review-month-year'>{review.createdAt = new Date().toDateString().split(' ')[1]} {review.createdAt = new Date().toDateString().split(' ')[3]}</h3>
                            <p className='review-inner-text'>{review.review}</p>
                            {(sessionUser && review.userId === sessionUser.id) ? (
                                <div id='delete-review-button-div'>
                                    {/* <OpenModalButton
                                        buttonText='Delete'
                                        modalComponent={<DeleteReviewModal review={review} />}
                                    /> */}
                                    <button onClick={() => {
                                        setShowModal(true)
                                        setModalType('update')
                                        setSelectedReview(review)
                                    }}>Update</button>
                                    <button onClick={() => {
                                        setShowModal(true)
                                        setModalType('delete')
                                        setSelectedReview(review)
                                    }}>Delete</button>
                                </div>
                            ) : ''}
                        </div>
                    ))}
                </div>

            </div>
        )}
                        <>
                {showModal && modalType === "create" && (
                    <ReviewModal
                        spotId={spotId}
                        onClose={() => {
                            setShowModal(false)
                            setModalType(null)
                            console.log("CLOSING")
                        }}
                        onSubmit={() => {
                            setShowModal(false)
                            setModalType(null)
                            console.log("SUBMITTING")
                        }}
                    />
                )}

                {showModal && modalType === "delete" && (
                    <DeleteReviewModal
                        spotId={spotId}
                        review={selectedReview}
                        onClose={() => {
                            setShowModal(false)
                            setModalType(null)
                            setSelectedReview(null)
                            console.log("CLOSING")
                        }}
                        onSubmit={() => {
                            setShowModal(false)
                            setModalType(null)
                            setSelectedReview(null)
                            console.log("SUBMITTING")
                        }}
                    />)}
                </>
        </>
    )
}

export default SpotDetails;
