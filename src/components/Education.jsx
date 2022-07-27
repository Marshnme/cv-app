import React from 'react';
import EducationForm from './EducationForm';
import AddIcon from '@mui/icons-material/Add';
import EditIcon from '@mui/icons-material/Edit';
import DeleteIcon from '@mui/icons-material/Delete';
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
                    {edit ? <AddIcon className='cursor-pointer' onClick={this.toggleEducationForm}>+</AddIcon> : null}
                    
                    {educationFormToggle ? <EducationForm addSchool={addSchool} formToggle={this.toggleEducationForm}></EducationForm> : null}
                </div>
            
                <div className="schools">
                    {schools.length < 1 ? <div className='add-schools-box cursor-pointer' onClick={this.toggleEducationForm}><p>Add Schools...</p></div> : schools.map((school) => {
                        return (edit ?
                            school.editing ?
                                
                                <form className='school-edit-form' onSubmit={handleSchoolEditSubmit.bind(this, school.id, this.state)}>
                                    <label className='label-space' htmlFor="school-name">School Name</label>
                                    <input required type='text' id='school-name' name='school-name' onChange={this.handleSchoolOnChange} value={schoolNameField}></input>
                                    <label className='label-space' htmlFor="major">Major</label>
                                    <input required type='text' id='major' name='major' onChange={this.handleSchoolOnChange} value={schoolMajorField}></input>
                                    <label className='label-space' htmlFor="date">Date</label>
                                    <input required type='text' id='date'
                                    name='date' onChange={this.handleSchoolOnChange} value={schoolDateField}></input>
                                    <button className='edit-apply'>Apply</button>
                                </form>
                                :
                                <div className='school' key={school.id}>
                                    <p>{school.schoolField}
                                        <EditIcon  className='cursor-pointer'  fontSize='small' onClick={handleSchoolEdit.bind(this, school, this.currentSchoolFieldState.bind(school))}></EditIcon>
                                        <DeleteIcon className='cursor-pointer' fontSize='small' onClick={deleteSchool.bind(this, school.id)}>X</DeleteIcon>
                                    </p>
                                    <p>{school.majorField}</p><p>{school.dateField}</p> 
                                </div> 
                             :
                            <div className='school' key={school.id}><p>{school.schoolField}</p><p>{school.majorField}</p><p>{school.dateField}</p></div>
                            
                       )
                    })}
                    
                </div>
            </div>
        )
    }
}

export default Education