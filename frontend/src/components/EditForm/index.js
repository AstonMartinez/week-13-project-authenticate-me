import './EditForm.css'
import { useState, useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import * as spotActions from '../../store/spots'
// import * as spotImgActions from '../../store/spotimages'
import { useHistory, useParams } from 'react-router-dom'

function EditForm() {
    const { spotId } = useParams()
    const allSpots = useSelector(state => state.spots.allSpots)
    const singleSpot = useSelector(state => state.spots.singleSpot)
    // const currSpotImgs = useSelector(state => state.spotImgs.SpotImages)
    // const spot = useSelector(state => state.spots.singleSpot)
    // const [haveSpot, setHaveSpot] = useState(false)
    const dispatch = useDispatch()

    let spots;
    let userSpots;
    let currSpot;

    if(Object.values(allSpots).length) {
        spots = Object.values(allSpots)
        userSpots = spots[0]
        currSpot = userSpots.find(singleSpot => singleSpot.id === Number(spotId))
    }

    // useEffect(() => {
    //     dispatch(spotImgActions.fetchSpotImages(spotId))
    // }, [dispatch])

    // console.log('spot images: ', currSpotImgs)
    // const currSpotTwo = currSpot.find(singleSpot => singleSpot.id === spotId)

    useEffect(() => {
        dispatch(spotActions.fetchSingleSpot(spotId))
    }, [dispatch])

    // console.log(singleSpot)

    // console.log('currSpot: ', currSpot)
    // console.log('currSpotTwo: ', currSpotTwo)
    // console.log('user spot: ', userSpots)
    // console.log('single user spot: ', userSpots[0])
    // console.log('type of: ', typeof userSpots[0].id)
    // console.log(typeof spotId)
    // console.log('curr spot: ', userSpots.find(singleSpot => singleSpot.id === Number(spotId)))



    const [country, setCountry] = useState(currSpot?.country || '')
    const [streetAddress, setStreetAddress] = useState(currSpot?.address || '')
    const [city, setCity] = useState(currSpot?.city || '')
    const [addressState, setAddressState] = useState(currSpot?.state || '')
    const [latitude, setLatitude] = useState(currSpot?.lat || '')
    const [longitude, setLongitude] = useState(currSpot?.lng || '')
    const [description, setDescription] = useState(currSpot?.description || '')
    const [spotName, setSpotName] = useState(currSpot?.name || '')
    const [price, setPrice] = useState(currSpot?.price || '')
    // const [previewImage, setPreviewImage] = useState(currSpot?.previewImage || '')
    // const [imgTwo, setImgTwo] = useState(singleSpot.SpotImages ? singleSpot.SpotImages[1].url : '')
    // const [imgThree, setImgThree] = useState(singleSpot.SpotImages ? singleSpot.SpotImages[1].url : '')
    // const [imgFour, setImgFour] = useState(singleSpot.SpotImages ? singleSpot.SpotImages[1].url : '')
    // const [imgFive, setImgFive] = useState(singleSpot.SpotImages ? singleSpot.SpotImages[1].url : '')
    const [errors, setErrors] = useState({})
    const [disableSubmit, setDisableSubmit] = useState(false)

    const sessionUser = useSelector(state => state.session.user)
    const history = useHistory()

    // if(haveSpot && spot !== {}) {
    //     setDisableSubmit(true)
    // }

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

            // const spotImgs = [{ url: previewImage, preview: true }]

            // if(imgTwo.length > 1) {
            //     spotImgs.push({ url: imgTwo, preview: false })
            // }

            // if(imgThree.length > 1) {
            //     spotImgs.push({ url: imgThree, preview: false })
            // }

            // if(imgFour.length > 1) {
            //     spotImgs.push({ url: imgFour, preview: false })
            // }

            // if(imgFive.length > 1) {
            //     spotImgs.push({ url: imgFive, preview: false })
            // }

            // console.log(newSpot)
            // let spotId

            dispatch(spotActions.updateSpot(spotId, editedSpot)).then(() => {
                history.push(`/spots/${spotId}`)
            })
            // .catch(async res => {
            //     const data = await res.json()
            //     if(data) {
            //         if(data.errors) {
            //             setErrors(data.errors)
            //         }
            //         if(data.message) {
            //             setErrors(data.message)
            //         }
            //     }
            // })

        } else {
            setErrors({ user: 'You must be logged in to update a spot!'})
            setDisableSubmit(true)
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
                {/* <div id='form-section-five'>
                    <h2 className='form-section-header-text'>Liven up your spot with photos</h2>
                    <p className='form-section-desc-text'>Submit a link to at least one photo to publish your spot.</p>
                    <div id='section-five-photo-inputs'>
                        <div>
                            <input
                            type='text'
                            placeholder='Preview Image URL'
                            name='prev-img'
                            value={previewImage}
                            onChange={(e) => setPreviewImage(e.target.value)}
                            className='form-preview-img-input'
                            required
                            />
                        </div>
                        <div>
                            <input
                            type='text'
                            placeholder='Image URL'
                            name='img-two'
                            value={imgTwo}
                            onChange={(e) => setImgTwo(e.target.value)}
                            className='form-img-input'
                            />
                        </div>
                        <div>
                            <input
                            type='text'
                            placeholder='Image URL'
                            name='img-three'
                            value={imgThree}
                            onChange={(e) => setImgThree(e.target.value)}
                            className='form-img-input'
                            />
                        </div>
                        <div>
                            <input
                            type='text'
                            placeholder='Image URL'
                            name='img-four'
                            value={imgFour}
                            onChange={(e) => setImgFour(e.target.value)}
                            className='form-img-input'
                            />
                        </div>
                        <div>
                            <input
                            type='text'
                            placeholder='Image URL'
                            name='img-five'
                            value={imgFive}
                            onChange={(e) => setImgFive(e.target.value)}
                            className='form-img-input'
                            id='final-img-input'
                            />
                        </div>
                    </div>
                </div> */}
                <button disabled={disableSubmit} id='new-spot-form-submit-button' type='submit'>Update Spot</button>
                {errors.user && <p>{errors.user}</p>}
            </form>
        </div>
    )
}

export default EditForm;
