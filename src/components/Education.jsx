import React from 'react';
import EducationForm from './EducationForm';
import '../styles/Education.css'

class Education extends React.Component{
    constructor(props) {
        super(props)

        this.state = { educationFormToggle: false}
        
        this.toggleEducationForm = this.toggleEducationForm.bind(this);
    }

    toggleEducationForm() {
       this.state.educationFormToggle ? this.setState({educationFormToggle:false}) : this.setState({educationFormToggle:true})
    }
    

    render() {
        let {edit,school} = this.props
        return (
            <div className='education-container'>
                <div className="school-section-title">
                    <h4>Education</h4>
                    {edit ? <p onClick={this.toggleEducationForm}>+</p> : null}
                    
                    {this.state.educationFormToggle ? <EducationForm></EducationForm> : null}
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