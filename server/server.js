require("dotenv").config();
const createError = require("http-errors");
const express = require("express");
const jwt = require("jsonwebtoken");
const session = require("express-session");
const SequelizeStore = require("connect-session-sequelize")(session.Store);
const db = require("./db");
const { User } = require("./db/models");
const cors = require("cors");

const sessionStore = new SequelizeStore({ db });

const PORT = process.env.PORT || 5000;

const app = express();

app.listen(PORT, () => console.log(`Server running on port ${PORT}`));

app.use(cors());
app.use(express.json());
app.use(express.urlencoded({ extended: false }));

app.use((req, res, next) => {
  const token = req.headers.authorization?.split(" ")[1];
  if (token) {
    jwt.verify(token, process.env.SESSION_SECRET, async (err, decoded) => {
      if (err) return next();
      const user = await User.findOne({ where: { id: decoded.id } });
      req.user = user;
      return next();
    });
  } else {
    return next();
  }
});

app.use("/api", require("./routes/api"));

sessionStore.sync().then(() => db.sync());
