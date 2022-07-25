import React from 'react';
import '../styles/GeneralInfo.css'

class GeneralInfo extends React.Component{
    constructor(props) {
        super(props)
    }

    render() {
        let { edit, info } = this.props
        console.log(edit,info)
        return (
            <div className='general-info-container'>
                <div className="name">
                    {edit ? <h3>Joshua Holtsclaw<span>editme</span></h3> : <h3>Joshua Holtsclaw</h3>}
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