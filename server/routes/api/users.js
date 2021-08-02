const router = require('express').Router()
const { User } = require('../../db/models')
const bcrypt = require('bcrypt')

const saltRounds = 10

// Register User
router.post('/register', async (req, res) => {
  try {
    const { username, password, email } = req.body

    if (!username || !password || !email) {
      return res
        .status(400)
        .json({ error: 'Username, password, and email required' })
    }

    const salt = bcrypt.genSaltSync(saltRounds)
    const hash = bcrypt.hashSync(password, salt)
    const userBody = {
      username,
      password: hash,
      email,
    }

    user = await User.create(userBody)
    res.json(user)
  } catch (error) {
    res.status(401)
  }
})

router.post('/login', async (req, res) => {
  try {
    const { username, password } = req.body

    const user = await User.findOne({
      where: {
        username: username
      }
    })
    if (!user) {
      console.log({ error: 'Username not found' })
      res.status(401).json({ error: "Wrong username and/or password" })
    } else {
      if (!bcrypt.compareSync(password, user.password)) {
        console.log({ error: 'Wrong username and/or password' })
        res.status(401).json({ error: "Wrong username and/or password" })
      } else {
        res.json(user)
      }
    }

  } catch (error) {}
})

module.exports = router
