const GET_SPOTS = 'spots/getSpots'
const GET_SINGLE_SPOT = 'spots/getSingleSpot'

const getSpots = (data) => {
    return {
        type: GET_SPOTS,
        payload: data,
    }
}

const getSingleSpot = (spot) => {
    return {
        type: GET_SINGLE_SPOT,
        payload: spot,
    }
}

export const fetchSpots = () => async (dispatch) => {
    const response = await fetch('/api/spots')
    if(response.ok) {
        const data = await response.json()
        // console.log('data from fetch: ', data)
        dispatch(getSpots(data))
    }
    // console.log('response not ok')
    return response;
}

export const fetchSingleSpot = (id) => async (dispatch) => {
    const response = await fetch(`/api/spots/${id}`)
    if(response.ok) {
        const data = await response.json()
        dispatch(getSingleSpot(data))
    }
}

const initialState = { allSpots: {}, singleSpot: {} }
const spotsReducer = (state = initialState, action) => {
    let newState;
    switch(action.type) {
        case GET_SPOTS:
            newState = Object.assign({ ...state  })
            newState.allSpots = action.payload
            return newState;
        case GET_SINGLE_SPOT:
            newState = Object.assign({ ...state })
            newState.singleSpot = action.payload
            return newState;
        default: return state
    }
}

export default spotsReducer;
