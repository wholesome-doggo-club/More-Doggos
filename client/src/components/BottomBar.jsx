import React from 'react';

const BottomBar = (props) => {
  return (
    <div className="bottombar-outer">
      <div className="bottombar-info">
        <img className="bottombar-image" src="https://alumni.unca.edu/sites/default/files/doggo.gif"></img>
        <div className="bottombar-name">Goobin</div>
        <div className="bottombar-extra"> Rotweiler | Adult | Male</div>
      </div>
      <div className="bottombar-ask">ASK ABOUT GOOBIN</div>
      <div className="bottombar-share"></div>
    </div>
  )
}

export default BottomBar;