import { csrfFetch } from './csrf'

const CREATE_IMAGE = 'spots/createImage'

const createImage = (data) => {
    return {
        type: CREATE_IMAGE,
        payload: data,
    }
}

export const createNewImage = (id, data) => async (dispatch) => {
    const req = await csrfFetch(`/api/spots/${id}/images`, {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json'
        },
        body: JSON.stringify(data)
    })
    const imgData = await req.json()
    const createdImg = imgData
    dispatch(createImage(imgData))
    return createdImg;
}

const initialState = {}
const spotImagesReducer = (state = initialState, action) => {
    let newState;
    switch(action.type) {
        case CREATE_IMAGE:
            newState = Object.assign({ ...state })
            newState.SpotImage = action.payload
            return newState;
        default: return state;
    }

}

export default spotImagesReducer;
