import React, {Component} from 'react';
import Search from './Search';

class App extends Component {
  constructor(props) {
    super(props);

    this.state = {searches: "no data yet"}
  }

  componentWillMount() {
    chrome.storage.sync.get("expediaStorage", (obj) => {
      console.log(obj);

      const searches = obj.expediaStorage.map( obj => {
        return (
          <Search
            key={obj.destination + obj.checkin + obj.checkout + obj.adults + obj.children}
            destination={obj.destination}
            checkIn={obj.checkIn}
            checkOut={obj.checkOut}
            adults={obj.adults}
            children={obj.children} />
        )
      })
      console.log("after mapping: ", searches);
      this.setState({searches: searches || this.state.searches})

      // this.setState({
      //   lastSearch: obj.expediaStorage[obj.expediaStorage.length - 1].destination || this.state.lastSearch
      // })
    })
  }

  render() {
    return (
      <div>
        {this.state.searches}
      </div>
    );
  }
}

export default App;
