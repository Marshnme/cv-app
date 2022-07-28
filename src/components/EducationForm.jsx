import React,{useState,useEffect} from 'react'
import uniqid from 'uniqid';
import CloseIcon from '@mui/icons-material/Close';
import '../styles/Education.css'

const EducationForm = (props) => {
    const [educationForm, setEducationForm] = useState({
        schoolField: '',
        majorField: '',
        dateField: '',
        editing: false,
        id:uniqid()
    })
       
    
    function handleChange(e) {
        if (e.target.id === 'school') {
            setEducationForm((prevState) => ({
                ...prevState,schoolField:e.target.value
            }))
        } else if (e.target.id === 'major') {
            setEducationForm((prevState) => ({
                ...prevState,majorField:e.target.value
            }))
        } else if (e.target.id === 'date') {
            setEducationForm((prevState) => ({
                ...prevState,dateField:e.target.value
            }))
        }
    }

        return (
            <div className='education-form-container'>
                <form className='education-form' onSubmit={props.addSchool.bind(this, props.formToggle, educationForm)}>
                    <CloseIcon className='close-icon cursor-pointer' onClick={props.formToggle}></CloseIcon>
                    <label htmlFor="school">School</label>
                    <input required type="text" id='school' name="school" onChange={handleChange} value={educationForm.schoolField} />
                    <label htmlFor="major">major</label>
                    <input required type="text" id='major' name="major" onChange={handleChange} value={educationForm.majorField} />
                    <label htmlFor="date">date</label>
                    <input required type="text" id='date' name="date" onChange={handleChange} value={educationForm.dateField} />
                    <button type='submit'>Add School</button>
                </form>
            </div>
        )
}

export default EducationForm