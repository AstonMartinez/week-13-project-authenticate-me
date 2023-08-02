import { csrfFetch } from './csrf'
const GET_REVIEWS_BY_SPOT = 'reviews/getReviewBySpot'
const CREATE_REVIEWS = 'reviews/createReview'

const createReview = (data) => {
    return {
        type: CREATE_REVIEWS,
        payload: data,
    }
}

const getReviewsBySpot = (data) => {
    return {
        type: GET_REVIEWS_BY_SPOT,
        payload: data,
    }
}

export const createNewReview = (id, review) => async (dispatch) => {
    const req = await csrfFetch(`/api/spots/${id}/reviews`, {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json'
        },
        body: JSON.stringify(review)
    })
    const data = await req.json()
    const newReview = data
    dispatch(createReview)
    return newReview;
}

export const getReviewsBySpotId = (id) => async (dispatch) => {
    const response = await fetch(`/api/spots/${Number(id)}/reviews`)
    if(response.ok) {
        const data = await response.json()
        dispatch(getReviewsBySpot(data))
    }
    return response;
}

const initialState = { reviews: {} }
const reviewsReducer = (state = initialState, action) => {
    let newState;
    switch(action.type) {
        case GET_REVIEWS_BY_SPOT:
            newState = Object.assign({ ...state })
            newState.reviews = action.payload
            return newState;
        case CREATE_REVIEWS:
            newState = Object.assign({ ...state })
            newState.reviews = action.payload
            return newState;
        default: return state;
    }
}

export default reviewsReducer;
