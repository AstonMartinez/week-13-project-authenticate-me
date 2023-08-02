import './EditForm.css'
import { useState, useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import * as spotActions from '../../store/spots'
import { useHistory, useParams } from 'react-router-dom'

function EditForm() {
    const { spotId } = useParams()
    const allSpots = useSelector(state => state.spots.allSpots)
    const dispatch = useDispatch()

    let spots;
    let userSpots;
    let currSpot;

    if(Object.values(allSpots).length) {
        spots = Object.values(allSpots)
        userSpots = spots[0]
        currSpot = userSpots.find(singleSpot => singleSpot.id === Number(spotId))
    }

    useEffect(() => {
        dispatch(spotActions.fetchSingleSpot(spotId))
    }, [dispatch, spotId])


    const [country, setCountry] = useState(currSpot?.country || '')
    const [streetAddress, setStreetAddress] = useState(currSpot?.address || '')
    const [city, setCity] = useState(currSpot?.city || '')
    const [addressState, setAddressState] = useState(currSpot?.state || '')
    const [latitude, setLatitude] = useState(currSpot?.lat || '')
    const [longitude, setLongitude] = useState(currSpot?.lng || '')
    const [description, setDescription] = useState(currSpot?.description || '')
    const [spotName, setSpotName] = useState(currSpot?.name || '')
    const [price, setPrice] = useState(currSpot?.price || '')
    //! TO DO LATER
    // const [previewImage, setPreviewImage] = useState(currSpot?.previewImage || '')
    // const [imgTwo, setImgTwo] = useState(singleSpot.SpotImages ? singleSpot.SpotImages[1].url : '')
    // const [imgThree, setImgThree] = useState(singleSpot.SpotImages ? singleSpot.SpotImages[1].url : '')
    // const [imgFour, setImgFour] = useState(singleSpot.SpotImages ? singleSpot.SpotImages[1].url : '')
    // const [imgFive, setImgFive] = useState(singleSpot.SpotImages ? singleSpot.SpotImages[1].url : '')
    const [errors, setErrors] = useState({})

    const sessionUser = useSelector(state => state.session.user)
    const history = useHistory()

    const handleSubmit = (e) => {
        e.preventDefault()
        setErrors({})
        if(sessionUser && currSpot !== {}) {
            const editedSpot = {
                country: country,
                address: streetAddress,
                city: city,
                state: addressState,
                lat: latitude,
                lng: longitude,
                description: description,
                name: spotName,
                price: price,
                ownerId: sessionUser.id,
            }


            dispatch(spotActions.updateSpot(spotId, editedSpot)).then(() => {
                history.push(`/spots/${spotId}`)
            }).catch(async res => {
                const data = await res.json()
                if(data) {
                    if(data.errors) {
                        setErrors(data.errors)
                    }
                    if(data.message) {
                        setErrors(data.message)
                    }
                }
            })


        } else {
            setErrors({ user: 'You must be logged in to update a spot!'})
        }



    }


    return (
        <div id='create-spot-form-parent-div'>
            <h1 className='form-title-text'>Update your Spot</h1>
            <h2 className='form-section-header-text'>Where's your place located?</h2>
            <p className='form-section-desc-text'>Guests will only get your exact address once they book a reservation.</p>
            <form id='create-new-spot-form' onSubmit={handleSubmit}>
                <div id='form-section-one'>
                    <div id='section-one-country'>
                        <label id='country-label' htmlFor='country'>Country</label>
                    </div>
                    <div>
                        <input
                        type='text'
                        name='country'
                        value={country}
                        onChange={(e) => setCountry(e.target.value)}
                        placeholder='Country'
                        id='form-country-input'
                        />
                        {errors.country && <p>{errors.country}</p>}
                    </div>
                    <div id='section-one-streetAddress'>
                        <label htmlFor='street-address'>Street Address</label>

                    </div>
                    <div>
                            <input
                            type='text'
                            name='street-address'
                            value={streetAddress}
                            onChange={(e) => setStreetAddress(e.target.value)}
                            placeholder='Address'
                            id='form-street-address-input'
                            />
                            {errors.address && <p>{errors.address}</p>}
                    </div>
                    <div>
                        <div id='city-state-labels'>
                        <label id='city-label' htmlFor='city'>City</label>
                        <label id='state-label' htmlFor='state'>State</label>
                        </div>
                        <div id='city-state-div'>
                            <input
                            type='text'
                            name='city'
                            value={city}
                            onChange={(e) => setCity(e.target.value)}
                            placeholder='City'
                            id='city-input'
                            required
                            />
                        {errors.city && <p>{errors.city}</p>}
                        <span className='comma-span'> , </span>
                        <input
                            type='text'
                            name='state'
                            value={addressState}
                            onChange={(e) => setAddressState(e.target.value)}
                            placeholder='STATE'
                            id='state-input'
                            required
                            />
                        {errors.state && <p>{errors.state}</p>}
                    </div>

                        </div>
                    <div id='lat-lng-div'>
                        <div id='lat-lng-labels'>
                        <label id='lat-label' htmlFor='latitude'>Latitude</label>
                        <label id='lng-label' htmlFor='longitude'>Longitude</label>
                        </div>
                            <input
                            type='text'
                            name='latitude'
                            value={latitude}
                            onChange={(e) => setLatitude(e.target.value)}
                            placeholder='Latitude'
                            id='lat-input'
                            required
                            />
                        {errors.lat && <p>{errors.lat}</p>}
                        <span className='comma-span'> , </span>
                        <label htmlFor='longitude'>
                        <input
                            type='text'
                            name='longitude'
                            value={longitude}
                            onChange={(e) => setLongitude(e.target.value)}
                            placeholder='Longitude'
                            id='lng-input'
                            required
                            />
                        </label>
                        {errors.lng && <p>{errors.lng}</p>}
                    </div>
                </div>
                <div id='form-section-two'>
                    <h2 className='form-section-header-text'>Describe your place to guests</h2>
                    <p className='form-section-desc-text'>Mention the best features of your space, any specifal amenities like fast wifi or parking, and what you love about the neighborhood.</p>
                    <input
                    type='textarea'
                    placeholder='Please write at least 30 characters'
                    name='description'
                    value={description}
                    onChange={(e) => setDescription(e.target.value)}
                    id='form-description-input'
                    />
                    {errors.description && <p>{errors.description}</p>}
                </div>
                <div id='form-section-three'>
                    <h2 className='form-section-header-text'>Create a title for your spot</h2>
                    <p className='form-section-desc-text'>Catch guests' attention with a spot title that highlights what makes your place special.</p>
                    <input
                    type='text'
                    placeholder='Name of your spot'
                    name='name'
                    value={spotName}
                    onChange={(e) => setSpotName(e.target.value)}
                    id='spot-name-input'
                    required
                    />
                    {errors.name && <p>{errors.name}</p>}
                </div>
                <div id='form-section-four'>
                    <h2 className='form-section-header-text'>Set a base price for your spot</h2>
                    <p className='form-section-desc-text'>Competitive pricing can help your listing stand out and rank higher in search results.</p>
                    $ <input
                    type='text'
                    placeholder='Price per night (USD)'
                    name='price'
                    value={price}
                    onChange={(e) => setPrice(e.target.value)}
                    id='spot-price-input'
                    required
                    />
                    {errors.price && <p>{errors.price}</p>}
                </div>
                <button disabled={(country.length > 0 && streetAddress.length > 0 && city.length > 0 && addressState.length > 0 && latitude.length > 0 && longitude.length > 0 && description.length > 0 && spotName.length > 0 && price.length > 0) ? false : true} id='new-spot-form-submit-button' type='submit'>Update Spot</button>
                {errors.user && <p>{errors.user}</p>}
            </form>
        </div>
    )
}

export default EditForm;
