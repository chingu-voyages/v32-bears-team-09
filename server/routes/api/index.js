const router = require('express').Router();

router.use('/users', require('./users'));
router.get('/test', (req,res) => {
    res.send('test');
  }
)

router.use((req, res, next) => {
  const error = new Error('Not Found');
  error.status = 404;
  next(error);
});

module.exports = router;