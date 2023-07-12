const express = require('express');
const { Op } = require('sequelize');
const { check } = require('express-validator');
const { setTokenCookie, restoreUser, requireAuth } = require('../../utils/auth.js');
const { handleValidationErrors } = require('../../utils/validation.js');
const router = express.Router();

const { Spot, SpotImage, Review, User, ReviewImage } = require('../../db/models')

router.delete('/:id', async (req, res) => {
    // if(req.user) {
    //     const spotImg = await SpotImage.findOne({
    //         where: {
    //             id: req.params.id
    //         }
    //     })


    //     if(spot.dataValues.)
    // } else {
    //     res.status(401)
    //     return res.json({ message: "Authentication required" })
    // }
})

module.exports = router;
