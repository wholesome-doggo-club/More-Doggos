import React from 'react';
import $ from 'jquery';

class DogCard extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      shareHover: false,
      shareClick: false
    }
    this.handleShareHover = this.handleShareHover.bind(this);
    this.handleShareClick = this.handleShareClick.bind(this);
  }

  handleShareHover(e) {
    e.preventDefault();
    if (this.state.shareHover === false) {
      this.setState({ shareHover: true });
    } else {
      this.setState({ shareHover: false });
    }
  }

  handleShareClick(e) {
    e.preventDefault();
    if (this.state.shareClick === false) {
      this.setState({ shareClick: true, shareHover: true })
    } else {
      this.setState({ shareClick: false })
    }
  }


  render() {
    return (
      <div>
        <div className="dogcard-outer">
          <div id="fill" className={this.state.shareClick ? 'start' : 'end'}></div>
          <div>
            <div className="dogcard-top">
              <img src="https://plannthat.com/wp-content/uploads/2017/06/DSC_0438.jpg" className="dogcard-image"></img>
              <div className="dogcard-filler"></div>
            </div>
            <div className="dogcard-name">BILLY</div>
          </div>
          {!this.state.shareClick &&
            <div className="dogcard-hover">
              <div>
                <img src="https://plannthat.com/wp-content/uploads/2017/06/DSC_0438.jpg" className="dogcard-image-round"></img>
                {!this.state.shareHover &&
                  <img src="./files/shareDefault.jpg" className="dogcard-share" onMouseOver={this.handleShareHover}></img>}

                {this.state.shareHover &&
                  <img src="./files/shareHover.jpg" className="dogcard-share" onMouseLeave={this.handleShareHover} onClick={this.handleShareClick}></img>}
              </div>
              {!this.state.shareClick &&
                <div className="dogcard-info">
                  <div className="dogcard-info-name">Billy</div>
                  <div className="dogcard-info-extra">Doggo Terrier</div>
                  <div>Young | Male</div>
                  <div>Los Angelos, CA</div>
                </div>
              }
            </div>
          }

          {this.state.shareClick &&
            <div className="dogcard-hover-share">
              <div>
                <img src="https://plannthat.com/wp-content/uploads/2017/06/DSC_0438.jpg" className="dogcard-image-round"></img>
                {!this.state.shareHover &&
                  <img src="./files/shareClose.png" className="dogcard-share" onMouseOver={this.handleShareHover}></img>}
                {this.state.shareHover &&
                  <img src="./files/shareCloseHover.png" className="dogcard-share" onClick={this.handleShareClick}></img>}
              </div>
              <div className="dogcard-info2">
                <div className="dogcard-info-share">Share Billy</div>
                <div className="dogcard-share-buttons">Ya -- Ba -- Da -- doop</div>
              </div>
            </div>
          }

        </div>
      </div>
    )
  }
}

export default DogCard;