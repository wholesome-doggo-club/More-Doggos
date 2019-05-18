import React from 'react';
import DoggoRow from './DoggoRow.jsx';
import DogCard from './DogLink.jsx';
import Doggoverflow from './Doggoverflow.jsx';
import $ from 'jquery';

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      height: 0,
      width: 0,
      doggos: []
    }
    this.updateDimensions = this.updateDimensions.bind(this);
  }

  updateDimensions() {
    this.setState({ width: $(window).width(), height: $(window).height() });
  }

  componentDidMount() {
    $.get('/api', (doggos) => {
      this.setState({ doggos: doggos });
    })
    window.addEventListener("resize", this.updateDimensions);
  }

  componentWillMount() {
    this.updateDimensions();
  }

  componentWillUnmount() {
    window.removeEventListener("resize", this.updateDimensions);
  }

  render(props) {
    return (
      <div className="dogcard-container">
        <DoggoRow height={this.state.height} width={this.state.width} doggos={this.state.doggos.slice(0, Math.floor((.8 * this.state.width)/ 310))}/>
        <div className="filler"></div>
        <DoggoRow height={this.state.height} width={this.state.width} doggos={this.state.doggos.slice(Math.floor((.8 * this.state.width)/ 310), 2 * Math.floor((.8 * this.state.width)/ 310))}/>
        {/* {this.state.doggos.map((doggo) => {
          return <DogCard doggo={doggo} />
        })} */}

        <Doggoverflow />
      </div>
    )
  }
}

export default App;

