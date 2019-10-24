const express = require('express');
const app = express();
const PORT = 4001;

const mongoose = require('mongoose');
mongoose.Promise = global.Promise;
mongoose.connect('mongodb://localhost/productReviews', {useMongoClient: true});

const bodyParser = require('body-parser');
const Reviews = require('../database/index.js');

//manage CORS policy
app.use((req, res, next) => {
  res.header('Access-Control-Allow-Origin', '*');
  next();
});

app.use(bodyParser.json());

//remove first arg to render all reviews
//broken with first argument included
app.use("/:productId/reviews", express.static(__dirname + '/../client/dist'));

//listens for request to url containing allReviews.json
app.get('/api/reviews', (req, res, next) => {
  Reviews.getAllReviews((err, data) => {
    if (err) {
      res.send(err);
    } else {
      res.send(data)
    }
  })
})

//listens for request to url containing specificProductReviews.json
app.get('/api/:productId/reviews', (req, res, next) => {
  console.log(req.params);
  Reviews.getReviewsByProductId(req.params.productId, (err, data) => {
    if (err) {
      res.send(err);
    } else {
      res.send(data);
    }
  })
})

app.listen(PORT, () => {console.log('Listening on port', PORT)});