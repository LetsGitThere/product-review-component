import React from 'react';
import caret from './back.png';

const SortBar = (props) => {
  return (
    <div>
      <nav>
        <div className="container-dropdown">
          <div className="box1-dropdown">
            <button className="box1-dropdown-btn">Star Rating <img className="box1-caret" src={caret} width="11"/></button>
              <ul>
                <li><a href="#">All stars</a></li>
                <li><a href="#">1 star</a></li>
                <li><a href="#">2 star</a></li>
                <li><a href="#">3 star</a></li>
                <li><a href="#">4 star</a></li>
                <li><a href="#">5 star</a></li>
              </ul>
          </div>
          <div className="box2-dropdown">
            <button className="box2-dropdown-btn">Sort Reviews <img className="box2-caret" src={caret} width="11"/></button>
              <ul>
                <li><a href="#">Star Rating</a></li>
                <li><a href="#">Submission Time</a></li>
                <li><a href="#">Reviews with Photos</a></li>
              </ul>
          </div>
        </div>
      </nav>
    </div>
  )
}

export default SortBar;