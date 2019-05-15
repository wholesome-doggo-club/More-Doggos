import React from 'react';

class DogCard extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      hovering: false,
    }

  }

  render() {

    return (
      <div>
        <div className="dogcard-outer">
          <div className="dogcard-top">
            <img src="https://plannthat.com/wp-content/uploads/2017/06/DSC_0438.jpg" className="dogcard-image"></img>
            <div className="dogcard-filler"></div>
          </div>
          <div className="dogcard-name">Billy</div>
        </div>
      </div>
    )
  }
}

export default DogCard;
