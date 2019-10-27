import React from 'react';
import '../styles/styles.css'
import caret from './back.png';

const Pages = (props) => {
  var pageNumbers = []

  for (var i = 1; i <= Math.ceil(props.totalReviews / props.reviewsPerPage); i++) {
    pageNumbers.push(i);
  }

  return(
    
    <nav>
      <ul className="page-nav">
        <a href="#">
          <li className="previous-btn"><img className="previous-caret" src={caret} width="20"/>Previous </li>
        </a>
        {
          pageNumbers.map((pageNumber) => {
            return (
              <li key={pageNumber} className="page-item">
                <a onClick={() => props.getPage(pageNumber)} href="#" >
                  {pageNumber}
                </a>
              </li>
            )
          })
        }
        <a href="#">
          <li className="next-btn">Next<img className="next-caret" src={caret} width="20"/></li>
        </a>
      </ul>
    </nav>
  )
}

export default Pages;
