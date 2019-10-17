import React from 'react';

const Review = (props) => {
  return (
    <div className="container-reviews">
      <div className="box1-reviews">
        <div className="image">
          <img src="https://2.bp.blogspot.com/-FzDfZz-hZDc/WX5qg-fQlHI/AAAAAAAAIPg/_OJNAFND8XoeD-hv6-eDVCXBiHkzNYuowCLcBGAs/s1600/5Stars.jpg" width="80"/>
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