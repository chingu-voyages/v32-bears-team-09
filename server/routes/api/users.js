const router = require('express').Router()
const { User } = require('../../db/models')
const bcrypt = require('bcrypt')
const jwt = require('jsonwebtoken')

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

    let user = await User.findOne({
      where: {
        username: username
      }
    })
    if (user) {
      return res
        .status(400)
        .json({ error: 'User already exists' })
    }

    const salt = bcrypt.genSaltSync(saltRounds)
    const hash = bcrypt.hashSync(password, salt)
    const userBody = {
      username,
      password: hash,
      email,
    }
    user = await User.create(userBody)
    const token = jwt.sign(
      { id: user.id },
      process.env.SESSION_SECRET,
      { expiresIn: 86400 }
    )
    res.json({ user, token })
  } catch (error) {
    res.status(401)
  }
})

// Login User
router.post('/login', async (req, res) => {
  try {
    const { username, password } = req.body
    if (!username || !password ) {
      return res
        .status(400)
        .json({ error: 'Username and password required' })
    }

    const user = await User.findOne({
      where: {
        username: username
      }
    })
    if (!user) {
      res.status(401).json({ error: "Wrong username and/or password" })
    } else {
      if (!bcrypt.compareSync(password, user.password)) {
        res.status(401).json({ error: "Wrong username and/or password" })
      } else {
        const token = jwt.sign(
          { id: user.id },
          process.env.SESSION_SECRET,
          { expiresIn: 86400 }
        )
        res.json({ user, token })
      }
    }
  } catch (error) {
    res.status(401)
  }
})

module.exports = router
