import React from 'react';

const AskAbout = (props) => {

  return (
    <div className="askabout-outer">

      <div className="askabout-top">
        <div className="askabout-top-upper">
          <div className="askabout-top-title">Ask About Goobin</div>
          <div className="askabout-top-info"><br/>Rotweiler <br/> Adult  |  Male  |  Large  |  Black</div>
          <img className="askabout-image" src="https://alumni.unca.edu/sites/default/files/doggo.gif"></img>
        </div>
        <div className="askabout-top-lower">
        <br/>
          <b>TO</b> <br/>
          Wholesome Doggo Club
        </div>
      </div>

      <div className="askabout-bottom">
        <div className="askabout-bottom-left">
        <br/>
        Have an account? Sign In <br/><br/>
          <b>OR INQUIRE AS GUEST</b> <br/>
          <div className="askabout-input-container">
            <div className="askabout-input"> First Name <br/>
              <input className="askabout-input-inside" type="text" name="fname"></input>
            </div>
          </div>
          <div className="askabout-input-container">
            <div className="askabout-input"> Last Name <br/>
              <input className="askabout-input-inside" type="text" name="fname"></input>
            </div>
          </div>
          <div className="askabout-input-container">
            <div className="askabout-input"> Email <br/>
              <input className="askabout-input-inside" type="text" name="fname"></input>
            </div>
          </div>
          <div className="askabout-input-container">
            <div className="askabout-input"> Phone Number (Optional) <br/>
              <input className="askabout-input-inside" type="text" name="fname"></input>
            </div>
          </div>
          <div className="askabout-input-container">
            <div className="askabout-input"> Country <br/>
              <input className="askabout-input-inside" type="text" name="fname"></input>
            </div>
          </div>
          <div className="askabout-input-container">
            <div className="askabout-input"> Zip Code <br/>
              <input className="askabout-input-inside" type="text" name="fname"></input>
            </div>
          </div>
          <div className="askabout-eula">
          By submitting this form, I agree to receive marketing and other communications from Petfinder. Read the Privacy Policy and About Our Ads.
          <br/><br/><br/>
          <input className="askabout-eula-checkbox" type="checkbox"></input>
          I’d like to receive email and other communications from Purina and its brands. Read the Privacy Policy and About Our Ads.
          </div>
        </div>
        <div className="askabout-bottom-right">
        <br/><br/><br/>
          YOUR MESSAGE (5000 CHARACTER LIMIT) <span className="askabout-smaller"><em>Additional Comments for Shelter or Rescue</em></span>
          <textarea className="askabout-textarea" placeholder="I'm wondering if..."></textarea>
          
          <div className="askabout-havepets">
          Do you have pets in your home? <div className="askabout-yesorno"><div className="askabout-yes">Yes</div><div className="askabout-no">No</div></div>
          </div>
          <div className="askabout-button">SEND MESSAGE</div>
        </div>
      </div>

    </div>
  )
}

export default AskAbout;