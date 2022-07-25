import React from 'react';
import EducationForm from './EducationForm';
import EditIcon from '@mui/icons-material/Edit';
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
        let {educationFormToggle} = this.state
        let {edit,addSchool,deleteSchool,schools} = this.props
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
                        return (edit ?
                            <div className='school'>
                                <p>{school.schoolField}<EditIcon></EditIcon> <span onClick={deleteSchool.bind(this,school.id)}>X</span></p><p>{school.majorField}</p><p>{school.dateField}</p> 
                            </div>
                             :
                            <div className='school'><p>{school.schoolField}</p><p>{school.majorField}</p><p>{school.dateField}</p></div>
                            
                       )
                    })}
                </div>
            </div>
        )
    }
}

export default Education