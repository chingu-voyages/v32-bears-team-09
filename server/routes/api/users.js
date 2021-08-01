const router = require('express').Router()
const { User } = require('../../db/models')


// Register User
router.post('/register', async (req, res, next) => {
    try {
        const { username, password, email } = req.body
        console.log(req.body)
        const user = await User.create(req.body)
        res.json(user)
    } catch (error) {
        res.status(401)
    }
})

module.exports = router