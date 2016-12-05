import React, {Component} from 'react';

class App extends Component {
  constructor(props) {
    super(props);

    this.state = {
      lastSearch: "User hasn't searched Expedia for Hotels yet"
    }
  }

  componentWillMount() {

  }

  render() {
    return (
      <div>
        {this.state.lastSearch}
      </div>
    );
  }
}

export default App;
