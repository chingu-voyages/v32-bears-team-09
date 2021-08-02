const Sequelize = require("sequelize");
const db = require("../db");

const Profile = db.define("profile", {
  bio: {
    type: Sequelize.STRING,
    unique: true,
    allowNull: false
  },
  userId: {
    type: Sequelize.INTEGER,
    unique: true,
    allowNull: false
  },
  spotify: {
    type: Sequelize.STRING,
    allowNull: true
  }
})

module.exports = Profile