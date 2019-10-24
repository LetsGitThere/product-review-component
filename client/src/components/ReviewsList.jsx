import React from 'react';
import Review from './Review.jsx';
import '../styles/styles.css'

class ReviewsList extends React.Component {
  constructor(props) {
    super(props)
  }

  render() {
    return (
      <div>
        
        {this.props.currentReviews.map((review) => {
          return ( 
            <Review review={review} key={review._id} />
          )
        })}
      </div>
    )
  }
}

export default ReviewsList;