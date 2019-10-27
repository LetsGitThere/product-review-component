import React from 'react';
import caret from './back.png';
import '../styles/styles.css'

const SortBar = (props) => {
  var sortRating = props.sortReviewsByRating;
  var sortDate = props.sortReviewsByDate;
  return (
    <div>
      <nav>
        <div className="container-dropdown">
          <div className="box1-dropdown">
            <button className="box1-dropdown-btn">Star Rating <img className="box1-caret" src={caret} width="11"/></button>
              <ul>
                <li className="all" onClick={sortRating}><a className="all" href="#">All stars</a></li>
                <li className="one" onClick={sortRating}><a className="one" href="#">1 star</a></li>
                <li className="two" onClick={sortRating}><a className="two" href="#">2 star</a></li>
                <li className="three" onClick={sortRating}><a className="three" href="#">3 star</a></li>
                <li className="four" onClick={sortRating}><a className="four" href="#">4 star</a></li>
                <li className="five" onClick={sortRating}><a className="five" href="#">5 star</a></li>
              </ul>
          </div>
          <div className="box2-dropdown">
            <button className="box2-dropdown-btn">Sort Reviews <img className="box2-caret" src={caret} width="11"/></button>
              <ul>
                <li className="all" onClick={sortRating}><a href="#">Star Rating</a></li>
                <li className="sort-date" onClick={sortDate}><a className="sort-date" href="#">Submission Time</a></li>
                <li><a href="#">Reviews with Photos</a></li>
              </ul>
          </div>
        </div>
      </nav>
    </div>
  )
}

export default SortBar;