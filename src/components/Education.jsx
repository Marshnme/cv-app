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
        let {formToggle} = this.state
        let {edit,addSchool,schools} = this.props
        return (
            <div className='education-container'>
                <div className="school-section-title">
                    <h4>Education</h4>
                    {edit ? <p onClick={this.toggleEducationForm}>+</p> : null}
                    
                    {this.state.educationFormToggle ? <EducationForm addSchool={addSchool} formToggle={    this.toggleEducationForm}></EducationForm> : null}
                </div>
                
                    {console.log(schools)}
                    <div className="schools">
                    {schools.map((school) => {
                    return(    
                    
                        <div className="school-info">
                            <p>{school.schoolField}</p>
                            <p>{school.majorField}</p>
                            <p>{school.dateField}</p>
                        </div>
                    )
                    })}
                </div>
            </div>
        )
    }
}

export default Education