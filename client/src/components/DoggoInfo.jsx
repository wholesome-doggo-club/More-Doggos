import React from 'react';

const DoggoInfo = (props) => {
  return (
    <div className="doggoinfo-outer">
      <div className="doggoinfo-left">
        <h1 className="doggoinfo-left-title">Goobin</h1>
        <h4> Rotweiler  |  Los Angeles, CA</h4>
        <div className="doggoinfo-left-description">Adult | Male | Large | Black</div>
        <div className="doggoinfo-about">
          <h1> About </h1>
          <h4> COAT LENGTH</h4>
          <h5> Short</h5>
          <h4> HOUSE-TRAINED</h4>
          <h5> Yes. Look at the hat</h5>
          <h4> HEALTH</h4>
          <h5> Vaccinations up to date!</h5>
          <h4> GOOD IN HOME WITH</h4>
          <h5> Everyone!</h5>
        </div>
        <div className="doggoinfo-meet">
          <h1> Meet Goobin</h1>
          <div className="doggoinfo-meet-info">
            Goobin has been a super dank dog since before he was born. The hat seen in the picture was made for him my momma Goobin and has stayed with him his whole life. Goobin plans on taking this hat with him to the beyond realm. Goobin is friendly towards anyone, but becareful around kids who are little bitches. If they steal his hat, he will fuck them up. Check out his insta @friggindoggonamedgoobin he follows back. <br/>
            On his belly, Goobin has a tattoo of aquarius to represent his love of the water and his perserverence through the doggo massacre of 2034. Throughout his life, he has been known as the number 1 doggo of all time. How he ended up at this random ass doggo adoption facility is still unknown. His swage levels acan compare to that of the super cool pokemon Scizor. If you don't what that is you probably shouldn't adopt this dog. This is because Goobin's spirit animal is a scizor. They say in his past life, he was indeed a scizor. Friggin wild.
          </div>
        </div>
      </div>
      <div className="doggoinfo-right">
        <div className="doggoinfo-right-top">
            <div className="doggoinfo-right-top-ask"> Ask About Goobin </div>
            <div className="doggoinfo-right-top-sponsor"> Sponsor Goobin </div>
          <div className="doggoinfo-right-top-shareprint">
            <div className="doggoinfo-right-top-share">Share</div> <div className="doggoinfo-right-top-print">Print</div>
          </div>
        </div>
        <div className="doggoinfo-right-bottom">
          <img className="doggoinfo-right-bottom-image" src="https://alumni.unca.edu/sites/default/files/doggo.gif"></img>
          <div className="doggoinfo-right-bottom-inner">
            <br/> <br/> <br/>
            <h2>The Wholesome Doggo Club</h2>
            <h5>Los Angeles, CA</h5>
            <br/> <br/> 
            <div className="doggoinfo-right-bottom-location">
              <img></img>
              <div>
                Location Address <br/>
                Los Angeles, CA
              </div>
            </div>
            
            <div className="doggoinfo-right-bottom-email">
              <img></img>
              <div>
                thewholesomedoggos@gmail.com
              </div>
            </div>

            <div className="doggoinfo-right-bottom-button">
              MORE ABOUT WHOLESOME DOGGOS
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default DoggoInfo;