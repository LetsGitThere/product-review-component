import React from 'react';
import Axios from 'axios';
import ReviewsList from './ReviewsList.jsx';

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
        console.log('test');
        console.log(res);
        this.setState({
          reviews: res.data
        })
      })
  }

  render() {
    return (
      <div>
        <ReviewsList reviews={this.state.reviews} />
      </div>
    )
  }
}

export default App;