const GET_REVIEWS_BY_SPOT = 'reviews/getReviewBySpot'

export const getReviewsBySpot = (data) => {
    return {
        type: GET_REVIEWS_BY_SPOT,
        payload: data,
    }
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
        default: return state;
    }
}

export default reviewsReducer;
