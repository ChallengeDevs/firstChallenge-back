const express = require('express');
const router = express.Router();

/* GET users listing. */
router.get('/get-countries', function (req, res, next) {
  res.send('Projeto Caio e Lucas');
});

module.exports = router;
