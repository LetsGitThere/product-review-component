const express = require('express');
const router = express.Router();
const Review = require('../../database/index.js');
const Results = require('../../database/index.js');

router.get('/reviews', (req, res) => {
  // Review.find((err, data) => {
  //   res.send(data);
  // })

  Results.getResultsPerPage((err, data) => {
    if (err) {
      res.send(err);
    } else {
      res.send(data);
    }
  })

})

module.exports = router;