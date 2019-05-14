import React from 'react';
import DogCard from './DogLink.jsx'

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {

    }

  }

  render(props) {
    return (
      <div className="dogcard-container">
        <DogCard />
      </div>
    )
  }
}

export default App;

