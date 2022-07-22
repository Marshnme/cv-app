import React from 'react';
import '../styles/GeneralInfo.css'

class GeneralInfo extends React.Component{
    constructor(props) {
        super(props)
    }

    render() {
        return (
            <div className='general-info-container'>
                <div className="name">
                    <h3>Joshua Holtsclaw</h3>
                </div>
                <div className="contact-info">
                    <p>Email@email.com</p>
                    <p>111-222-3333</p>
                    <p>WebsiteLinkHere</p>
                </div>
            </div>
        )
    }
}

export default GeneralInfo