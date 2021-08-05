const router = require("express").Router();
router.use("/users", require("./users"));

router.post("/refresh_spotify_token", (req, res) => {});

router.post("/spotify_token", require("./spotify").fetch_spotify_token);

router.use((req, res, next) => {
  const error = new Error("Not Found");
  error.status = 404;
  next(error);
});

module.exports = router;
