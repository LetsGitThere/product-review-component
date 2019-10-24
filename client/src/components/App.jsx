import React from 'react';
import Axios from 'axios';

import '../styles/styles.css'
import SortBar from './SortBar.jsx';
import ReviewsList from './ReviewsList.jsx';
import Pages from './Pages.jsx';



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
    var productId = window.location.pathname.split('/')[1];
    console.log(productId);
    Axios.get(`http://localhost:4001/api/${productId}/reviews`)
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