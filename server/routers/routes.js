const express = require('express');
const router = express.Router();
const Review = require('../../database/index.js');

router.get('/reviews', (req, res) => {
  Review.find((err, data) => {
    res.send(data);
  })
})

module.exports = router;