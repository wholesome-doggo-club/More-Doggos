import React from 'react';
import DogCard from './DogLink.jsx';
import Doggoverflow from './Doggoverflow.jsx';
import $ from 'jquery';

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      doggos: []
    }

  }

  componentDidMount() {
    $.get('/api', (doggos) => {
      this.setState({doggos: doggos});
    })
  }

  render(props) {
    return (
      <div className="dogcard-container">
        {this.state.doggos.map((doggo) => {
          return <DogCard doggo={doggo}/>
        })}
        <Doggoverflow />
      </div>
    )
  }
}

export default App;

