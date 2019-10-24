import React from 'react';
import '../styles/styles.css'
import oneStar from '../../../images/1Star.jpg';
import twoStars from '../../../images/2Stars.jpg';
import threeStars from '../../../images/3Stars.jpg';
import fourStars from '../../../images/4Stars.jpg';
import fiveStars from '../../../images/5Stars.jpg';

const Review = (props) => {
  var star = null;
  if (props.review.rating === 1) {
    star = oneStar;
  } else if (props.review.rating === 2) {
    star = twoStars;
  } else if (props.review.rating === 3) {
    star = threeStars;
  } else if (props.review.rating === 4) {
    star = fourStars;
  } else if (props.review.rating === 5) {
    star = fiveStars;
  }

  return (
    <div className="container-reviews">
      <div className="box1-reviews">
        <div className="image" >
          <img src={star} width="80"/>
        </div>
        <div className="title">{props.review.title}</div>
        <div className="content">{props.review.content}</div>
        <div className="handle">{props.review.handle}</div>
      </div>
      <div className="box2-reviews">
        <div className="date">{props.review.date}</div>
      </div>
    </div>
  )
}

export default Review;