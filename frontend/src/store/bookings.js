import { csrfFetch } from './csrf'
const GET_BOOKING_BY_ID = 'bookings/getBookingById'
const GET_BOOKING_BY_SPOT = 'bookings/getAllBySpot'
const GET_ALL_USER_BOOKINGS = 'bookings/getUserBookings'
const DELETE_BOOKING = 'bookings/deleteBooking'
const UPDATE_BOOKING = 'bookings/updateBooking'
const CREATE_BOOKING = 'bookings/createBooking'

const getAllBySpot = (data) => {
    return {
        type: GET_BOOKING_BY_SPOT,
        payload: data
    }
}

const getUserBookings = (data) => {
    return {
        type: GET_ALL_USER_BOOKINGS,
        payload: data
    }
}

const updateBooking = (data) => {
    return {
        type: UPDATE_BOOKING,
        payload: data,
    }
}

const deleteBooking = (data) => {
    return {
        type: DELETE_BOOKING,
        payload: data,
    }
}

const createBooking = (data) => {
    return {
        type: CREATE_BOOKING,
        payload: data,
    }
}

const getBookingById = (data) => {
    return {
        type: GET_BOOKING_BY_ID,
        payload: data,
    }
}

export const updateUserBooking = (id, updatedBooking) => async (dispatch) => {
    const response = await csrfFetch(`/api/bookings/${id}`, {
        method: "PUT",
        headers: {
            'Content-Type': 'application/json'
        },
        body: JSON.stringify(updatedBooking)
    })

    if(response.ok) {
        dispatch(updateBooking(updatedBooking))
    }

    return response;
}

export const deleteUserBooking = (id, booking) => async (dispatch) => {
    const response = await csrfFetch(`/api/bookings/${id}`, {
        method: 'DELETE',
        headers: {
            'Content-Type': 'application/json'
        }
    })

    if(response.ok) {
        dispatch(deleteBooking(booking))
    }

    return response;
}

export const createNewBooking = (spotId, booking) => async (dispatch) => {
    const res = await csrfFetch(`/api/spots/${spotId}/bookings`, {
        method: "POST",
        headers: {
            "Content-Type": "application/json"
        },
        body: JSON.stringify(booking)
    })
    if(res.ok) {
        const data = await res.json()
        dispatch(createBooking(data))
    }
}

export const getById = (id) => async (dispatch) => {
    const response = await fetch(`/api/bookings/${(id)}/details`)
    if(response.ok) {
        const data = await response.json()
        dispatch(getBookingById(data))
    } else {
        const result = await response.json()
    }
    return response;
}

export const getByUserId = () => async (dispatch) => {
    const response = await fetch(`/api/bookings/current`)
    if(response.ok) {
        const data = await response.json()
        dispatch(getUserBookings(data))
    }
    return response
}

const initialState = { allBookings: {}, singleBooking: {} }
const bookingsReducer = (state = initialState, action) => {
    let newState;
    switch(action.type) {
        case GET_ALL_USER_BOOKINGS:
            newState = Object.assign({ ...state })
            newState.allBookings = action.payload
            return newState;
        case CREATE_BOOKING:
            newState = Object.assign({ ...state })
            newState.singleBooking = action.payload
            return newState;
        case DELETE_BOOKING:
            newState = Object.assign({ ...state })
            delete newState.allBookings[action.payload]
            return newState;
        case GET_BOOKING_BY_ID:
            newState = Object.assign({ ...state })
            newState.singleBooking = action.payload
            return newState;
        case GET_BOOKING_BY_SPOT:
            newState = Object.assign({ ...state })
            newState.allBookings = action.payload
            return newState;
        case UPDATE_BOOKING:
            newState = Object.assign({ ...state })
            newState.singleBooking = action.payload
            return newState;
        default: return state;
    }
}

export default bookingsReducer;
