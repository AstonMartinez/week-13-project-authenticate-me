const router = require('express').Router();
const sessionRouter = require('./session.js');
const usersRouter = require('./users.js');
const spotsRouter = require('./spots.js')
const reviewsRouter = require('./reviews.js')
const spotImgsRouter = require('./spot-images.js')
const reviewImgsRouter = require('./review-images.js')
const bookingsRouter = require('./bookings.js')
const { restoreUser } = require('../../utils/auth.js');


router.use(restoreUser)

router.use('/session', sessionRouter);

router.use('/users', usersRouter);

router.use('/spots', spotsRouter)

router.use('/reviews', reviewsRouter)

router.use('/spot-images', spotImgsRouter)

router.use('/review-images', reviewImgsRouter)

router.use('/bookings', bookingsRouter)

router.post('/test', (req, res) => {
    res.json({ requestBody: req.body });
});

router.get('/restore-user', (req, res) => {
    return res.json(req.user);
})

// for auth required router
const { requireAuth } = require('../../utils/auth.js');
router.get('/require-auth', requireAuth, (req, res) => {
    return res.json(req.user);
});

// for set token cookie
const { setTokenCookie } = require('../../utils/auth.js');
const { User } = require('../../db/models');


// phase 1 test router
router.post('/test', (req, res) => {
    res.json({ requestBody: req.body })
});

// phase 3 test router
router.get('/set-token-cookie', async (_req, res) => {
    const user = await User.findOne({
        where: {
            username: 'Demo-lition'
        }
    });
    setTokenCookie(res, user);
    return res.json({ user: user });
});


module.exports = router;
