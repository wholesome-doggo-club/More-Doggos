import React from 'react';
import $ from 'jquery';
import styles from '../styles/DogLink.css';

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
        <div className={styles.dogcard-outer}>
          <div id="fill" className={this.state.shareClick ? styles.start : 'end'}></div>
          <div>
            <div className={styles.dogcard-top}>
              <img src="https://plannthat.com/wp-content/uploads/2017/06/DSC_0438.jpg" className={styles.dogcard-image}></img>
              <div className={styles.dogcard-filler}></div>
            </div>
            <div className={styles.dogcard-name}>BILLY</div>
          </div>
<<<<<<< HEAD
          {!this.state.shareClick &&
            <div className={styles.dogcard-hover}>
              <div>
                <img src="https://plannthat.com/wp-content/uploads/2017/06/DSC_0438.jpg" className={styles.dogcard-image-round}></img>
                {!this.state.shareHover &&
                  <img src="./files/shareDefault.jpg" className={styles.dogcard-share} onMouseOver={this.handleShareHover}></img>}

                {this.state.shareHover &&
                  <img src="./files/shareHover.jpg" className={styles.dogcard-share} onMouseLeave={this.handleShareHover} onClick={this.handleShareClick}></img>}
              </div>
              {!this.state.shareClick &&
                <div className={styles.dogcard-info}>
                  <div className={styles.dogcard-info-name}>Billy</div>
                  <div className={styles.dogcard-info-extra}>Doggo Terrier</div>
                  <div>Young | Male</div>
                  <div>Los Angelos, CA</div>
                </div>
              }
=======
          <div className="dogcard-hover">
            <div>
              <img src="https://plannthat.com/wp-content/uploads/2017/06/DSC_0438.jpg" className="dogcard-image-round"></img>
              {!this.state.shareHover &&
                <img src="./files/shareDefault.jpg" className="dogcard-share" onMouseOver={this.handleShareHover}></img>}

              {this.state.shareHover &&
                <img src="./files/shareHover.jpg" className="dogcard-share" onMouseLeave={this.handleShareHover} onClick={this.handleShareClick}></img>}
>>>>>>> parent of 600f808... Single Doggo component complete
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
          {this.state.shareClick &&
            <div className={styles.dogcard-hover-share}>
              <div>
                <img src="https://plannthat.com/wp-content/uploads/2017/06/DSC_0438.jpg" className={styles.dogcard-image-round}></img>
                {!this.state.shareHover &&
                  <img src="./files/shareClose.png" className={styles.dogcard-share} onMouseOver={this.handleShareHover}></img>}
                {this.state.shareHover &&
<<<<<<< HEAD
                  <img src="./files/shareCloseHover.png" className={styles.dogcard-share} onClick={this.handleShareClick}></img>}
=======
                  <img src="./files/shareCloseHover.png" className="dogcard-share" onMouseLeave={this.handleShareHover} onClick={this.handleShareClick}></img>}
>>>>>>> parent of 600f808... Single Doggo component complete
              </div>
              <div className={styles.dogcard-info2}>
                <div className={styles.dogcard-info-share}>Share Billy</div>
                <div className={styles.dogcard-share-buttons}>
                  <img className={styles.dogcard-sharing} src="./files/fb.png"></img>
                  <img className={styles.dogcard-sharing} src="./files/twitter.png"></img>
                  <img className={styles.dogcard-sharing} src="./files/pin.png"></img>
                  <img className={styles.dogcard-sharing} src="./files/mail.png"></img>
                  <img className={styles.dogcard-sharing} src="./files/link.png"></img>
                </div>
              </div>
            </div>
          }

        </div>
      </div>
    )
  }
}

export default DogCard;
