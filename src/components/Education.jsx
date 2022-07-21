import React from 'react';
import '../styles/Education.css'

class Education extends React.Component{
    constructor(props) {
        super(props)
    }

    render() {
        return (
            <div className='education-container'>
                <div className="school-section-title">
                    <h4>Education</h4>
                </div>
                <div className="schools">
                    <div className="school-info">
                        <p>Super cool School</p>
                        <p>Studied the arts of cool</p>
                        <p>from 12/12/1222 - 12/12/1244</p>
                    </div>
                </div>
            </div>
        )
    }
}

export default Education