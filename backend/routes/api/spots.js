const express = require('express');
const { Op } = require('sequelize');
const router = express.Router();

const { Spot, SpotImage, Review, User } = require('../../db/models')

router.get('/:id', async (req, res) => {
    const spot = await Spot.findOne({
        where: {
            id: req.params.id
        }
    })
    // console.log(spot)
    if(!spot) {
        res.status(404)
        return res.json({ message: "Spot couldn't be found" })
    }

    const spotReviews = await spot.getReviews()
    // console.log(spotReviews.length)
    spot.dataValues.numReviews = spotReviews.length

    let sum = 0;
    for(let i = 0; i < spotReviews.length; i++) {
        sum += spotReviews[i].dataValues.stars
    }
    spot.dataValues.avgRating = sum / spotReviews.length

    // const spotImages = await spot.getSpotImages()
    const spotImages = await SpotImage.findOne(
        {
        where: {
            spotId: spot.id
        }
    })
    spot.dataValues.SpotImages = [spotImages]


    const spotOwner = await User.scope({ method: ['getSpotOwner', spot.ownerId] }).findOne({
        where: {
            id: spot.ownerId
        }
    })
    spot.dataValues.Owner = spotOwner


    // console.log(spot)
    // console.log(spotImages)

    res.json(spot)
})

router.get('/', async (req, res) => {
    const allSpots = await Spot.findAll()
        // include: [
        //     {
        //         model: SpotImage,
        //         as: 'previewImage'
        //     },
        //     {
        //         model: Review
        //     }
        // ]
    // )}
    for (let spot of allSpots) {
        const reviews = await spot.getReviews()
        let sum = 0;
        for(let i = 0; i < reviews.length; i++) {
            sum += reviews[i].dataValues.stars
        }
        const avgRating = sum /reviews.length
        // const avgRating = reviews[0].dataValues.stars / reviews.length
        spot.dataValues.avgRating = avgRating

        const image = await SpotImage.findOne({
            where: {
                spotId: spot.id
            }
        })
        const imageUrl = image.dataValues.url
        spot.dataValues.previewImage = imageUrl
        console.log(spot.dataValues)
        // spot.dataValues.attributes.push(avgRating)
        // console.log(spot)
    }

    res.json({ Spots: allSpots })
})


module.exports = router;
