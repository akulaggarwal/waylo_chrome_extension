import React, {Component} from 'react';

class Search extends Component {
  constructor(props) {
    super(props);
  }

  componentWillMount() {
  }

  render() {
    return (
      <div>
        <p>Destination: {this.props.destination}</p>
        <p>CheckIn Date: {this.props.checkIn}</p>
        <p>CheckOut Date: {this.props.checkOut}</p>
        <p>Adults: {this.props.adults}</p>
        <p>Children: {this.props.children}</p>
        <p>--------------</p>
      </div>
    );
  }
}

export default Search;
