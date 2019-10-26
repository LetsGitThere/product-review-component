import React from 'react';
import Axios from 'axios';

import '../styles/styles.css'
import SortBar from './SortBar.jsx';
import ReviewsList from './ReviewsList.jsx';
import Pages from './Pages.jsx';

import fourStars from '../../../images/4Stars.jpg';



class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      reviews: [],
      currentPage: 1,
      reviewsPerPage: 5
    }
    // this.getAllReviews = this.getAllReviews.bind(this);
    this.getProductReviewsById = this.getProductReviewsById.bind(this);
  }

  // getAllReviews() {
  //   Axios.get('http://localhost:4001/api/reviews')
  //     .then((res) => {
  //       this.setState({
  //         reviews: res.data
  //       })
  //     })
  // }

  getProductReviewsById() {
    var hostname = window.location.hostname
    var productId = window.location.pathname.split('/')[1];
    // Axios.get(`http://localhost:4001/api/${productId}/reviews`)
    Axios.get("http://" + hostname + ":4001/api/" + productId + "/reviews")
      .then((res) => {
        this.setState({
          reviews: res.data
        })
      })
  }

  componentDidMount() {
    this.getProductReviewsById();
    // this.getAllReviews();
  } 

  render() {
    var lastIndex = this.state.currentPage * this.state.reviewsPerPage;
    var firstIndex = lastIndex - this.reviewsPerPage;
    var currentReviews = this.state.reviews.slice(firstIndex, lastIndex);
    // var numberOfPages = Math.floor(this.state.totalResults / 5);
    return (
        <div>

          {/* <div className="container-ratings">
            <div className="box1-stars">
              <div>REVIEWS</div>
              <div><img src={fourStars} width="80"/><span>(43)</span></div>
            </div>
            <div className="box2-reviews">
              <div>
                <label>5 Stars</label>
                <progress max="100" value="70"> 70% </progress>
              </div>
              <div>
                <label>4 Stars</label>
                <progress max="100" value="70"> 70% </progress>
              </div>
              <div>
                <label>3 Stars</label>
                <progress max="100" value="70"> 70% </progress>
              </div>
              <div>
                <label>2 Stars</label>
                <progress max="100" value="70"> 70% </progress>
              </div>
              <div>
                <label>1 Star</label>
                <progress max="100" value="70"> 70% </progress>
              </div>
            </div>
            <div className="box3-write-reviews">
              Write a Review
            </div>
          </div> */}

          <div>
            <SortBar />
          </div>
          <div>
            <ReviewsList currentReviews={currentReviews} />
          </div>
          <div>
            <div className="container-pagebar">
              <Pages reviewsPerPage={this.state.reviewsPerPage} totalReviews={this.state.reviews.length} />
            </div>
          </div>
        </div>
    )
  }
}

export default App;