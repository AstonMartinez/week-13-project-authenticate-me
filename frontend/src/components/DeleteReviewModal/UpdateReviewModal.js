// import './ReviewModal.css'
import React, { useState, useRef } from 'react'
import * as reviewActions from '../../store/reviews'
import { useDispatch } from 'react-redux'
// import { useModal } from '../../context/Modal.js'


function UpdateReviewModal({ currReview, spotId, onSubmit, onClose }) {
    const dispatch = useDispatch()
    const [review, setReview] = useState(currReview.review)
    const [stars, setStars] = useState(currReview.stars)
    const [errors, setErrors] = useState({})
    const determineStarFill = (num) => {
        if(num === 1) {
            if(currReview.stars >= 1) {
                return "solid"
            }
        } else if(num === 2) {
            if(currReview.stars >= 2) {
                return "solid"
            } else {
                return "regular"
            }
        } else if(num === 3) {
            if(currReview.stars >= 3) {
                return "solid"
            } else {
                return "regular"
            }
        } else if(num === 4) {
            if(currReview.stars >= 4) {
                return "solid"
            } else {
                return "regular"
            }
        } else if(num === 5) {
            if(currReview.stars === 5) {
                return "solid"
            } else {
                return "regular"
            }
        }
        // if(currReview.stars === 1) {
        //     setFillOne("solid")
        // } else if(currReview.stars === 2) {
        //     setFillOne("solid")
        //     setFillTwo("solid")
        // } else if(currReview.stars === 3) {
        //     setFillOne("solid")
        //     setFillTwo("solid")
        //     setFillThree("solid")
        // } else if(currReview.stars === 4) {
        //     setFillOne("solid")
        //     setFillTwo("solid")
        //     setFillThree("solid")
        //     setFillFour("solid")
        // } else {
        //     setFillOne("solid")
        //     setFillTwo("solid")
        //     setFillThree("solid")
        //     setFillFour("solid")
        //     setFillFive("solid")
        // }
    }

    const starOneFill = determineStarFill(1)
    const starTwoFill = determineStarFill(2)
    const starThreeFill = determineStarFill(3)
    const starFourFill = determineStarFill(4)
    const starFiveFill = determineStarFill(5)
    const [fillOne, setFillOne] = useState(starOneFill)
    const [fillTwo, setFillTwo] = useState(starTwoFill)
    const [fillThree, setFillThree] = useState(starThreeFill)
    const [fillFour, setFillFour] = useState(starFourFill)
    const [fillFive, setFillFive] = useState(starFiveFill)

    const modalOverlayRef = useRef()

    const handleDispatches = async (review) => {
        await dispatch(reviewActions.updateUserReview(currReview.id, review))
        await dispatch(reviewActions.getReviewsBySpotId(spotId))
    }

    const handleSubmit = (e) => {
        e.preventDefault()
        setErrors({})
        const updatedReview = {
            review: review,
            stars: stars
        }

        handleDispatches(updatedReview).then(onClose)
        // return dispatch(reviewActions.createNewReview(spotId, newReview)).then(() => dispatch(reviewActions.getReviewsBySpotId(spotId))).then(onClose).catch(async res => {
        //     const data = await res.json()
        //     if(data && data.errors) {
        //         setErrors(data)
        //     }
        // })
    }


    return(
        <>
        <div id='modal-background' ref={modalOverlayRef} onClick={onSubmit}></div>
            <div id='review-modal-parent-div'>
                <div id='review-modal-form-div'>
                    <h1 id='review-form-modal-title'>How was your stay?</h1>
                    {errors.errors && <p>{errors.errors}</p>}
                    <form id='new-review-modal-form'>
                        <div id='review-textarea-div'>
                            <textarea
                            // type='textarea'
                            name='review'
                            id='review-textarea-input'
                            value={review}
                            onChange={(e) => setReview(e.target.value)}
                            placeholder='Leave your review here...'
                            />
                        </div>
                        <div id='review-modal-stars-div'>
                            <i id='star-num-one' onClick={() => {
                                    setStars(1)
                                    setFillOne('solid')
                                    setFillTwo('regular')
                                    setFillThree('regular')
                                    setFillFour('regular')
                                    setFillFive('regular')
                                }}
                                class={`fa-${fillOne} fa-star fa-lg`} style={{color: '#000000'}}></i>
                            <i id='star-num-two' onClick={() => {
                                    setStars(2)
                                    setFillOne('solid')
                                    setFillTwo('solid')
                                    setFillThree('regular')
                                    setFillFour('regular')
                                    setFillFive('regular')
                                }}
                                class={`fa-${fillTwo} fa-star fa-lg`} style={{color: '#000000'}}></i>
                            <i id='star-num-three' onClick={() => {
                                    setStars(3)
                                    setFillOne('solid')
                                    setFillTwo('solid')
                                    setFillThree('solid')
                                    setFillFour('regular')
                                    setFillFive('regular')
                                }}
                                class={`fa-${fillThree} fa-star fa-lg`} style={{color: '#000000'}}></i>
                            <i id='star-num-four' onClick={() => {
                                        setStars(4)
                                        setFillOne('solid')
                                        setFillTwo('solid')
                                        setFillThree('solid')
                                        setFillFour('solid')
                                        setFillFive('regular')
                                }}
                                class={`fa-${fillFour} fa-star fa-lg`} style={{color: '#000000'}}></i>
                            <i id='star-num-five' onClick={() => {
                                        setStars(5)
                                        setFillOne('solid')
                                        setFillTwo('solid')
                                        setFillThree('solid')
                                        setFillFour('solid')
                                        setFillFive('solid')
                                }}
                                class={`fa-${fillFive} fa-star fa-lg`} style={{color: '#000000'}}></i>
                            <span id='review-stars-text-span'>Stars</span>
                        </div>
                        <div id='review-submit-button-div'>
                            <button id='submit-new-review-button' onClick={handleSubmit} disabled={review.length >= 10 ? false : true}>Submit</button>
                        </div>
                    </form>
                </div>
            </div>
        </>
    )
}

export default UpdateReviewModal;
