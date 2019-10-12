import React from 'react';

const Review = (props) => {
  return (
    <div className="reviewBorder container">
      <div className="body box-1">
        <div className="image">
          <img src="https://2.bp.blogspot.com/-FzDfZz-hZDc/WX5qg-fQlHI/AAAAAAAAIPg/_OJNAFND8XoeD-hv6-eDVCXBiHkzNYuowCLcBGAs/s1600/5Stars.jpg" width="80"/>
        </div>
        <div className="title">{props.review.title}</div>
        <div className="content">{props.review.content}</div>
        <div className="handle">{props.review.handle}</div>
      </div>
      <div className="date box-2">
        <p>{props.review.date}</p>
      </div>
    </div>
  )
}

export default Review;