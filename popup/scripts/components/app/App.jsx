import React, {Component} from 'react';

class App extends Component {
  constructor(props) {
    super(props);
  }

  componentWillMount() {
    chrome.storage.sync.set({
      "expediaStorage": []
    })


    // chrome.storage.sync.remove("expediaStorage");
  }

  render() {
    return (
      <div>
        Hello World
      </div>
    );
  }
}

export default App;
