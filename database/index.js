//establish database
const mongoose = require('mongoose');
mongoose.connect('mongodb://localhost/productReviews', {useMongoClient: true});
const db = mongoose.connection;
db.on('error', console.error.bind(console, 'connection error:'));
db.once('open', () => {console.log('Successful connection to database!')});

//random data generators
const LoremIpsum = require('lorem-ipsum').LoremIpsum;
const faker = require('faker');
const moment = require('moment');

//settings for LoremIpsum data generator
const lorem = new LoremIpsum({
  sentencesPerParagraph: {
    max: 8,
    min: 4
  },
  wordsPerSentence: {
    max: 16,
    min: 3
  }
});

/************************************************************************
product
console.log(lorem.generateWords(Math.floor(Math.random() * 2) + 1));

title
console.log(lorem.generateWords(Math.floor(Math.random() * 5) + 1 ));

content
console.log(lorem.generateSentences(Math.floor(Math.random() * 8) + 1 ));

handle
console.log(faker.name.findName());

date
console.log(moment().format('ll'))
************************************************************************/

const productReviewsSchema = new mongoose.Schema({
  productId: Number,
  reviewId: Number,
  product: String,
  rating: Number,
  title: String,
  content: String,
  handle: String,
  date: String,
  sortDate: Number
});

const Review = mongoose.model('Reviews', productReviewsSchema);

const seedDb = () => {
  
  for (var i = 1; i <= 20; i++) {
    var reviewsCount = (Math.floor(Math.random() * 21) + 5);
    for (var j = 1; j <= reviewsCount; j++) {
      const filter = {
        productId: i,
        reviewId: j
      }
      const update = {
        productId: i,
        reviewId: j,
        product: lorem.generateWords(Math.floor(Math.random() * 2) + 1),
        rating: (Math.floor(Math.random() * 5) + 1),
        title: lorem.generateWords(Math.floor(Math.random() * 5) + 1),
        content: lorem.generateSentences(Math.floor(Math.random() * 8) + 1 ),
        handle: faker.name.findName(),
        date: moment().format('ll'),
        sortDate: moment().format('YYYYMMDD')
      }
      Review.findOneAndUpdate(filter, update, {new: true, upsert: true}, (err, data) => {
        if (err) {
          console.log(err);
        }
      });
    }
  }
}

const getResultsPerPage = (callback) => {
  Review.find({})
        .limit(5)
        .exec(callback);
}

seedDb();

module.exports = Review;
module.exports.getResultsPerPage = getResultsPerPage;