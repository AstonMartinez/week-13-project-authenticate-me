const express = require('express');
const { Op } = require('sequelize');
const { check } = require('express-validator');
const { setTokenCookie, restoreUser, requireAuth } = require('../../utils/auth.js');
const { handleValidationErrors } = require('../../utils/validation.js');
const router = express.Router();

const { Spot, SpotImage, Review, User } = require('../../db/models')

const validateBody = [
    check('address').exists({ checkFalsy: true }).notEmpty().withMessage('Street address is required'),
    check('city').exists({ checkFalsy: true }).notEmpty().withMessage('City is required'),
    check('state').exists({ checkFalsy: true }).notEmpty().withMessage('State is required'),
    check('country').exists({ checkFalsy: true }).notEmpty().withMessage('Country is required'),
    check('lat').exists({ checkFalsy: true }).notEmpty().isDecimal().withMessage('Latitude is not valid'),
    check('lng').exists({ checkFalsy: true }).notEmpty().isDecimal().withMessage('Longitude is not valid'),
    check('name').exists({ checkFalsy: true }).notEmpty().isLength({ max: 50 }).withMessage('Name must be less than 50 characters'),
    check('description').exists({ checkFalsy: true }).notEmpty().withMessage('Description is required'),
    check('price').exists({ checkFalsy: true }).notEmpty().withMessage('Price per day is required'),
    handleValidationErrors
]
// <---------------------------- ADD IMAGE TO A SPOT ---------------------------->
router.post('/:id/images', async (req, res) => {
    const { url, preview } = req.body
    if(req.user) {
        const spot = await Spot.findOne({
            where: {
                id: req.params.id
            }
        })

        if(!spot) {
            res.status(404)
            res.json({ message: "Spot couldn't be found" })
        }

        if(spot && spot.ownerId !== req.user.id) {
            res.status(403)
            res.json({ message: "Forbidden" })
        }

        if(spot && spot.ownerId === req.user.id) {
            const newImage = await SpotImage.create({
                spotId: spot.id,
                url: url,
                preview: preview
            })

            res.json( {id: newImage.id, url: newImage.url, preview: newImage.preview} )
            res.json(newImage)
        }

    } else {
        res.status(401)
        res.json({ message: "Authentication required" })
    }
})


// <---------------------------- EDIT A SPOT ---------------------------->
router.put('/:id', validateBody, async (req, res) => {
    const { address, city, state, country, lat, lng, name, description, price } = req.body

    if(req.user) {
        const spot = await Spot.findOne({
            where: {
                id: req.params.id
            }
        })

        if(!spot) {
            res.status(404)
            res.json({ message: "Spot couldn't be found" })
        }

        if(spot.ownerId !== req.user.id) {
            res.status(403)
            res.json({ message: "Forbidden" })
        }

        if(spot && spot.ownerId === req.user.id) {
            spot.set({
                address: address || spot.address,
                city: city || spot.city,
                state: state || spot.state,
                country: country || spot.country,
                lat: lat || spot.lat,
                lng: lng || spot.lng,
                name: name || spot.name,
                description: description || spot.description,
                price: price || spot.price
            })

            await spot.save()
            res.json(spot)
        }
    } else {
        res.status(401)
        res.json({ message: "Authentication required" })
    }
})


// <---------------------------- CREATE A SPOT ---------------------------->
router.post('/', validateBody, async (req, res) => {
    const { address, city, state, country, lat, lng, name, description, price } = req.body
    // const { user } = req;
    // if (user) {
    //     const safeUser = {
    //       id: user.id,
    //       firstName: user.firstName,
    //       lastName: user.lastName,
    //       email: user.email,
    //       username: user.username,
    //     }
    // }
    if(req.user) {
        const newSpot = await Spot.create({
            ownerId: req.user.id,
            address: address,
            city: city,
            state: state,
            country: country,
            lat: lat,
            lng: lng,
            name: name,
            description: description,
            price: price
        })

        res.status(201)
        res.json(newSpot)


    } else {
        res.status(401)
        res.json({ message: "Authentication required" })
    }

    // } else {
    //     res.status(403)
    //     res.json({ message: "Forbidden" })
    // }

})



// <---------------------------- GET ALL SPOTS BY CURRENT USER ---------------------------->
router.get('/current', async (req, res) => {
    const { user } = req;
    if (user) {
        const safeUser = {
          id: user.id,
          firstName: user.firstName,
          lastName: user.lastName,
          email: user.email,
          username: user.username,
        }

        const userSpots = await Spot.findAll({
            where: {
                ownerId: safeUser.id
            }
        })

        for (let spot of userSpots) {
            const reviews = await spot.getReviews()
            let sum = 0;
            for(let i = 0; i < reviews.length; i++) {
                sum += reviews[i].dataValues.stars
            }
            const avgRating = sum /reviews.length
            console.log(spot)
            spot.dataValues.avgRating = avgRating

            const image = await SpotImage.findOne({
                where: {
                    spotId: spot.id
                }
            })
            if(image) {
                const imageUrl = image.dataValues.url
                spot.dataValues.previewImage = imageUrl
            } else {
                spot.dataValues.previewImage = null
            }
        }

        res.json({ Spots: userSpots })

    } else {
        res.status(401)
        res.json({ message: "Authentication required" })
    }
})




// <---------------------------- GET SPOT DETAILS BY ID ---------------------------->
router.get('/:id', async (req, res) => {
    const spot = await Spot.findOne({
        where: {
            id: req.params.id
        }
    })
    if(!spot) {
        res.status(404)
        return res.json({ message: "Spot couldn't be found" })
    }

    const spotReviews = await spot.getReviews()
    spot.dataValues.numReviews = spotReviews.length

    let sum = 0;
    for(let i = 0; i < spotReviews.length; i++) {
        sum += spotReviews[i].dataValues.stars
    }
    spot.dataValues.avgRating = sum / spotReviews.length

    // const spotImages = await spot.getSpotImages()
    const spotImages = await SpotImage.findAll(
        {
        where: {
            spotId: spot.id
        }
    })

    // if(spotImages) {
        spot.dataValues.SpotImages = spotImages
    // }
    // else {
    //     spot.dataValues.SpotImages = null
    // }


    const spotOwner = await User.scope({ method: ['getSpotOwner', spot.ownerId] }).findOne({
        where: {
            id: spot.ownerId
        }
    })
    spot.dataValues.Owner = spotOwner

    res.json(spot)
})

// <---------------------------- GET ALL SPOTS ---------------------------->
router.get('/', async (req, res) => {
    const allSpots = await Spot.findAll()

    for (let spot of allSpots) {
        const reviews = await spot.getReviews()
        let sum = 0;
        for(let i = 0; i < reviews.length; i++) {
            sum += reviews[i].dataValues.stars
        }
        // console.log(spot.dataValues)
        const avgRating = sum /reviews.length
        // const avgRating = reviews[0].dataValues.stars / reviews.length
        spot.dataValues.avgRating = avgRating

        const image = await SpotImage.findOne({
            where: {
                spotId: spot.id,
                preview: true
            }
        })

        if(image) {
            // let imgArr = []
            // if(image.length > 1) {
            //     for(let i = 0; i < image.length; i++) {
            //         imgArr.push(image[i].dataValues.url)
            //     }
            //     spot.dataValues.previewImage =
            // } else {

            // }
            // const allSpotImages = await SpotImage.findAll()
            // console.log(allSpotImages)
        const imageUrl = image.dataValues.url
        spot.dataValues.previewImage = imageUrl
        } else {
            spot.dataValues.previewImage = null
        }
    }

    res.json({ Spots: allSpots })
})


// <---------------------------- DELETE A SPOT ---------------------------->
router.delete('/:id', async (req, res) => {
    if(req.user) {
        const spot = await Spot.findOne({
            where: {
                id: req.params.id
            }
        })

        if(!spot) {
            res.status(404)
            res.json({ message: "Spot couldn't be found" })
        }

        if(spot.ownerId !== req.user.id) {
            res.status(403)
            res.json({ message: "Forbidden" })
        }

        if(spot && spot.ownerId === req.user.id) {
            await spot.destroy()
            res.json({ message: "Successfully deleted" })
        }

    } else {
        res.status(401)
        res.json({ message: "Authentication required" })
    }
})




module.exports = router;
