import React from 'react';
import Review from './Review.jsx';

class ReviewsList extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      reviews: []
    }
  }

  render() {
    return (
      <div>
        {this.props.reviews.map((review) => {
          return (
            <Review review={review} key={review._id} />
          )
        })}
      </div>
    )
  }
}

export default ReviewsList;