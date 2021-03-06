const Sequelize = require("sequelize");

// const db = new Sequelize("postgres://localhost:5432/spotifysocial", {
//     logging: false
// })

let db;
if (!process.env.DATABASE) {
  console.log("using in-memory database");
  db = new Sequelize("sqlite::memory:", { logging: false });
} else {
  db = new Sequelize(
    process.env.DATABASE,
    process.env.DB_USERNAME,
    process.env.DB_PASSWORD,
    {
      host: "localhost",
      dialect: "postgres",
      port: 5432,
      logging: false,
    }
  );
}

const testDBConnection = async () => {
  try {
    await db.authenticate();
    console.log("Connected to database");
  } catch (error) {
    console.error("Unable to connect to the database:", error);
  }
};
testDBConnection();

module.exports = db;
