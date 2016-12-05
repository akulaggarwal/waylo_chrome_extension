import React, {Component} from 'react';
import axios from 'axios';

class Search extends Component {
  constructor(props) {
    super(props);

    this.state = {
      temp: "sorry, no data currently available"
    }
  }

  componentWillMount() {
    const destination = this.props.destination;
    const city = destination.slice(0, destination.indexOf(","))
    const state = destination.slice(destination.indexOf(",") + 2);

    axios.get(`http://api.wunderground.com/api/e783d83d8d1417dc/geolookup/conditions/q/${state}/${city}.json`)
      .then( resp => {
        this.setState({
          temp: resp.data.current_observation.temp_f
        })
      })
      .catch( err=> {
        console.error(err);
      })
  }

  render() {
    return (
      <div>
        <p>Destination: {this.props.destination}</p>
        <p>CheckIn Date: {this.props.checkIn}</p>
        <p>CheckOut Date: {this.props.checkOut}</p>
        <p>Adults: {this.props.adults}</p>
        <p>Children: {this.props.children}</p>
        <p>Temperature (F): {this.state.temp}</p>
        <p>--------------</p>
      </div>
    );
  }
}

export default Search;
