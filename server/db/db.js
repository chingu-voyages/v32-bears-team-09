const Sequelize = require('sequelize')

const db = new Sequelize("postgres://localhost:5432/spotifysocial", {
    logging: false
})
const test = async () => {
    try {
        await db.authenticate();
        console.log('Connection has been established successfully.');
      } catch (error) {
        console.error('Unable to connect to the database:', error);
    }
}
test()

module.exports = db