import React from 'react';
import EducationForm from './EducationForm';
import EditIcon from '@mui/icons-material/Edit';
import '../styles/Education.css'

class Education extends React.Component{
    constructor(props) {
        super(props)

        this.state = {
            educationFormToggle: false,
            schoolNameField: '',
            schoolMajorField: '',
            schoolDateField:''

        }
        
        this.toggleEducationForm = this.toggleEducationForm.bind(this);
        this.currentSchoolFieldState = this.currentSchoolFieldState.bind(this);
        this.handleSchoolOnChange = this.handleSchoolOnChange.bind(this);
        

    }
    
   

    toggleEducationForm() {
       this.state.educationFormToggle ? this.setState({educationFormToggle:false}) : this.setState({educationFormToggle:true})
    }

    currentSchoolFieldState(school, major, date) {
        this.setState({...this.state,schoolNameField:school,schoolMajorField: major, schoolDateField:date})
    }

    handleSchoolOnChange(e) {
        if (e.target.id === 'school-name') {
            this.setState({...this.state,schoolNameField:e.target.value})
        } else if (e.target.id === 'major') {
            this.setState({...this.state,schoolMajorField:e.target.value})
        } else if (e.target.id === 'date') {
            this.setState({...this.state,schoolDateField:e.target.value})
        }
    }

    
    

    render() {
        let {educationFormToggle,schoolNameField,schoolMajorField,schoolDateField} = this.state
        let {edit,addSchool,handleSchoolEdit,handleSchoolEditSubmit,deleteSchool,schools} = this.props
        return (
            <div className='education-container'>
                <div className="school-section-title">
                    <h4>Education</h4>
                    {edit ? <p onClick={this.toggleEducationForm}>+</p> : null}
                    
                    {educationFormToggle ? <EducationForm addSchool={addSchool} formToggle={this.toggleEducationForm}></EducationForm> : null}
                </div>
            
                <div className="schools">
                    {schools.map((school) => {
                        return (edit ?
                            school.editing ?
                                
                                <form onSubmit={handleSchoolEditSubmit.bind(this,school.id,this.state)}>
                                    <input type='text' id='school-name' onChange={ this.handleSchoolOnChange } value={schoolNameField}></input>
                                    <input type='text' id='major' onChange={ this.handleSchoolOnChange } value={schoolMajorField}></input>
                                    <input type='text' id='date' onChange={this.handleSchoolOnChange} value={schoolDateField}></input>
                                    <button>Apply</button>
                                </form>
                                :
                                <div className='school' id={school.id}>
                                    <p>{school.schoolField}
                                        <EditIcon className='cursor-pointer' onClick={handleSchoolEdit.bind(this, school, this.currentSchoolFieldState.bind(school))}></EditIcon>
                                        <span className='cursor-pointer' onClick={deleteSchool.bind(this, school.id)}>X</span>
                                    </p>
                                    <p>{school.majorField}</p><p>{school.dateField}</p> 
                                </div> 
                             :
                            <div className='school' id={school.id}><p>{school.schoolField}</p><p>{school.majorField}</p><p>{school.dateField}</p></div>
                            
                       )
                    })}
                </div>
            </div>
        )
    }
}

export default Education