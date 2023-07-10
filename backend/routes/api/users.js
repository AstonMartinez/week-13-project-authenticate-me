const express = require('express');
const bcrypt = require('bcryptjs');

const { setTokenCookie, requireAuth } = require('../../utils/auth');
const { User } = require('../../db/models');

const { check } = require('express-validator');
const { handleValidationErrors } = require('../../utils/validation')

const router = express.Router();

const validateSignup = [
    check('firstName').exists({ checkFalsy: true }).isAlpha().withMessage("First Name is required"),
    check('lastName').exists({ checkFalsy: true }).isAlpha().withMessage("Last Name is required"),
    check('email').exists({ checkFalsy: true }).isEmail().withMessage('Invalid email'),
    check('username').exists({ checkFalsy: true }).withMessage('Username is required'),
    check('username').exists({ checkFalsy: true }).isLength({ min: 4 }).withMessage('Username is required'),
    check('username').not().isEmail().withMessage('Username is required'),
    check('password').exists({ checkFalsy: true }).isLength({ min: 6 }).withMessage('Password must be 6 characters or more.'),
    handleValidationErrors
];

// sign up
router.post('', validateSignup, async (req, res) => {
    const { firstName, lastName, email, password, username } = req.body;
    const hashedPassword = bcrypt.hashSync(password);

    const userCheck1 = await User.findOne({
        where: {
            username: username
        }
    })

    const userCheck2 = await User.findOne({
        where: {
            email: email
        }
    })

    if(userCheck1 || userCheck2) {
        const err = new Error()
        if(userCheck1) {
            err.message = "User already exists"
            err.errors = { username: "User with that username already exists" }
        }
        if(userCheck2) {
            err.message = "User already exists"
            err.errors = { email: "User with that email already exists" }
        }
        res.status(500)
        res.json(err)
    }

    const user = await User.create({
        firstName,
        lastName,
        email,
        username,
        hashedPassword,
    });

    const safeUser = {
        id: user.id,
        firstName: user.firstName,
        lastName: user.lastName,
        email: user.email,
        username: user.username,
    }

    await setTokenCookie(res, safeUser);

    return res.json({
        user: safeUser
    });
});


module.exports = router;
