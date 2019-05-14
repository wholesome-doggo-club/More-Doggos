import React from 'react';

class DogCard extends React.Component {
    constructor(props) {
        super(props);
        this.state = {

        }

    }

    render() {
        return (
            <div className="dogcard-outer">
                <img src="" className="dogcard-image"></img>
                <div className="dogcard-inner">
                    <div className="dogcard-name">

                    </div>
                </div>
            </div>
        )
    }
}

export default DogCard;