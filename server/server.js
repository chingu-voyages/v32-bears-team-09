const createError = require('http-errors')
const express = require('express')
const jwt = require('jsonwebtoken')
const session = require('express-session')
const SequelizeStore = require("connect-session-sequelize")(session.Store);
const db = require("./db");
const { User } = require("./db/models");

const sessionStore = new SequelizeStore({ db })

const app = express()

app.use(express.json())
app.use(express.urlencoded({ extended: false }))

app.use((req, res, next) => { 
    const token = req.headers.token.split(" ")[1]
    if (token) {
        jwt.verify(token, process.env.SESSION_SECRET, (err, decoded) => {
            if (err) {
                return next()
            }
            User.findOne({
                where: { id: decoded.id }
            }).then(user => {
                req.user = user
                return next()
            })
        })
    } else {
        return next()
    }
})