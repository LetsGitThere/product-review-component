import React from 'react';
import Axios from 'axios';

import '../styles/styles.css'
import SortBar from './SortBar.jsx';
import ReviewsList from './ReviewsList.jsx';
import Pages from './Pages.jsx';

import oneStar from '../../../images/1Star.jpg';
import twoStars from '../../../images/2Stars.jpg';
import threeStars from '../../../images/3Stars.jpg';
import fourStars from '../../../images/4Stars.jpg';
import fiveStars from '../../../images/5Stars.jpg';



class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      reviews: [],
      sortByRating: [],
      currentPage: 1,
      reviewsPerPage: 5
    }
    this.getProductReviewsById = this.getProductReviewsById.bind(this);
    this.sortReviewsByRating = this.sortReviewsByRating.bind(this);
    this.sortReviewsByDate = this.sortReviewsByDate.bind(this);
    this.getPage = this.getPage.bind(this);
  }

  sortReviewsByRating(e) {
    console.log(e.target.className);

    var sortBy = null;
    if (e.target.className === "one") {
      sortBy = 1;
    } else if (e.target.className === "two") {
      sortBy = 2;
    } else if (e.target.className === "three") {
      sortBy = 3;
    } else if (e.target.className === "four") {
      sortBy = 4;
    } else if (e.target.className === "five") {
      sortBy = 5;
    }

    if (typeof sortBy === "number") {
      var sorted = this.state.sortByRating.filter((review) => {
        return review.rating === sortBy;
      })
      this.setState({
        reviews: sorted
      })
    } else {
      this.setState({
        reviews: this.state.sortByRating
      })
    }
  }

  sortReviewsByDate(e) {
    var dates = [];
    this.state.reviews.forEach((review) => {
      dates.push(review.sortDate)
    })
    var sorted = this.state.reviews.sort((a, b) => {
      return b.sortDate - a.sortDate;
    })
    this.setState({
      reviews: sorted
    })
  }

  getProductReviewsById() {
    var hostname = window.location.hostname
    var productId = window.location.pathname.split('/')[1];
    Axios.get("http://" + hostname + ":4001/api/" + productId + "/reviews")
      .then((res) => {
        this.setState({
          reviews: res.data,
          sortByRating: res.data
        })
      })
  }

  getPage(pageNumber) {
    this.setState({
      currentPage: pageNumber,
    })
  }

  componentDidMount() {
    this.getProductReviewsById();
  } 

  render() {
    var lastIndex = this.state.currentPage * this.state.reviewsPerPage;
    var firstIndex = lastIndex - this.reviewsPerPage;
    var currentReviews = this.state.reviews.slice(firstIndex, lastIndex);

    var fiveCount = 0
    var fourCount = 0
    var threeCount = 0
    var twoCount = 0
    var oneCount = 0

    this.state.reviews.forEach((review) => {
      if (review.rating === 5) {
        fiveCount++;
      } else if (review.rating === 4) {
        fourCount++;
      } else if (review.rating === 3) {
        threeCount++;
      } else if (review.rating === 2) {
        twoCount++;
      } else if (review.rating === 1) {
        oneCount++;
      }
    })

    return (
        <div>

          <div className="container-ratings">
            <span className="box1-container">
              <div className="box1-stars"><strong className="label">REVIEWS</strong></div>
              <div className="box1-img"><img src={threeStars} width="122"/><span className="box1-number-rating">({this.state.reviews.length})</span></div>
            </span>

            <span className="box2-labels">
              <div><label>5 stars</label></div>
              <div><label>4 stars</label></div>
              <div><label>3 stars</label></div>
              <div><label>2 stars</label></div>
              <div><label>1 star</label></div>
            </span>

            <span className="box3-reviews">
              <div><progress max={this.state.reviews.length} value={fiveCount}></progress></div>
              <div><progress max={this.state.reviews.length} value={fourCount}></progress></div>
              <div><progress max={this.state.reviews.length} value={threeCount}></progress></div>
              <div><progress max={this.state.reviews.length} value={twoCount}></progress></div>
              <div><progress max={this.state.reviews.length} value={oneCount}></progress></div>
            </span>

            <span className="box4-num">
              <div><span>{fiveCount}</span></div>
              <div><span>{fourCount}</span></div>
              <div><span>{threeCount}</span></div>
              <div><span>{twoCount}</span></div>
              <div><span>{oneCount}</span></div>
            </span>

            <span className="box5-btn-container">
              <div><button className="box5-btn" onClick={() => alert('hi :)')}>Write a Review</button></div>
            </span>
          </div>

          <div>
            <SortBar sortReviewsByRating={this.sortReviewsByRating} sortReviewsByDate={this.sortReviewsByDate}/>
          </div>

          <div>
            <ReviewsList currentReviews={currentReviews} />
          </div>

          <div className="container-pagebar">
            <Pages reviewsPerPage={this.state.reviewsPerPage} totalReviews={this.state.reviews.length} getPage={this.getPage}/>
          </div>

        </div>
    )
  }
}

export default App;
