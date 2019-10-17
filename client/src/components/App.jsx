import React from 'react';
import Axios from 'axios';
import ReviewsList from './ReviewsList.jsx';
import SortBar from './SortBar.jsx';
import PageBar from './PageBar.jsx';

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      reviews: []
    }
  }

  componentDidMount() {
    Axios.get('/reviews')
      .then((res) => {
        console.log(res);
        this.setState({
          reviews: res.data
        })
      })
  }

  render() {
    return (
      <div>
        <div>
          <SortBar />
        </div>
        <div>
          <ReviewsList reviews={this.state.reviews} />
        </div>
        <div>
          <PageBar />
        </div>
      </div>
      
    )
  }
}

export default App;