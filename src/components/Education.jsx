import React,{useState,useEffect} from 'react';
import EducationForm from './EducationForm';
import AddIcon from '@mui/icons-material/Add';
import EditIcon from '@mui/icons-material/Edit';
import DeleteIcon from '@mui/icons-material/Delete';
import '../styles/Education.css'

const Education = (props) => {
    const [educationState, setEducationState] = useState({
        schoolNameField: '',
        schoolMajorField: '',
        schoolDateField: '',
        educationFormToggle:false
    })

    
   

    function toggleEducationForm() {
        educationState.educationFormToggle ? setEducationState((prevState) => ({
        ...prevState,educationFormToggle:false})) : setEducationState((prevState) => ({
        ...prevState,educationFormToggle:true}))
    
    }

    function currentSchoolFieldState(school, major, date) {
        setEducationState((prevState) => ({
            ...prevState, schoolNameField: school, schoolMajorField: major, schoolDateField: date
        }))
    }

    function handleSchoolOnChange(e) {
        if (e.target.id === 'school-name') {
            setEducationState((prevState) => ({
            ...prevState, schoolNameField: e.target.value
        }))
        } else if (e.target.id === 'major') {
             setEducationState((prevState) => ({
            ...prevState, schoolMajorField: e.target.value
        }))
        } else if (e.target.id === 'date') {
             setEducationState((prevState) => ({
            ...prevState, schoolDateField: e.target.value
        }))
        }
    }

    
    

    
        return (
            <div className='education-container'>
                <div className="school-section-title">
                    <h4>Education</h4>
                    {props.edit ? <AddIcon className='cursor-pointer' onClick={toggleEducationForm}>+</AddIcon> : null}
                    
                    {educationState.educationFormToggle ? <EducationForm addSchool={props.addSchool} formToggle={toggleEducationForm}></EducationForm> : null}
                </div>
            
                <div className="schools">
                    {props.schools.length < 1 ? <div className='add-schools-box cursor-pointer' onClick={toggleEducationForm}><p>Add Schools...</p></div> : props.schools.map((school) => {
                        return (props.edit ?
                            school.editing ?
                                
                                <form className='school-edit-form' onSubmit={props.handleSchoolEditSubmit.bind(this, school.id, educationState)}>
                                    <label className='label-space' htmlFor="school-name">School Name</label>
                                    <input required type='text' id='school-name' name='school-name' onChange={handleSchoolOnChange} value={educationState.schoolNameField}></input>
                                    <label className='label-space' htmlFor="major">Major</label>
                                    <input required type='text' id='major' name='major' onChange={handleSchoolOnChange} value={educationState.schoolMajorField}></input>
                                    <label className='label-space' htmlFor="date">Date</label>
                                    <input required type='text' id='date'
                                    name='date' onChange={handleSchoolOnChange} value={educationState.schoolDateField}></input>
                                    <button className='edit-apply'>Apply</button>
                                </form>
                                :
                                <div className='school' key={school.id}>
                                    <p>{school.schoolField}
                                        <EditIcon  className='cursor-pointer'  fontSize='small' onClick={props.handleSchoolEdit.bind(this, school, currentSchoolFieldState.bind(school))}></EditIcon>
                                        <DeleteIcon className='cursor-pointer' fontSize='small' onClick={props.deleteSchool.bind(this, school.id)}>X</DeleteIcon>
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

export default Education