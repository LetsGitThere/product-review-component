import React from 'react';
import Pages from './Pages.jsx';
import caret from './back.png';

class PageBar extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      state: []
    }
  }

  render() {
    return (
      <div className="container-pagebar">
        <span className="box1-previous-btn"><img className="previous-caret" src={caret} width="20"/>Previous </span>
        <span className="box2-pages"><Pages /></span>
        <span className="box3-next-btn"> Next<img className="next-caret" src={caret} width="20"/></span>
      </div>
    )
  }
}

export default PageBar;