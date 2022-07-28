import React,{useState,useEffect} from 'react';
import uniqid from 'uniqid';
import CloseIcon from '@mui/icons-material/Close';


const WorkExpForm = (props) => {

    const [workExpFormState, setWorkExpFormState] = useState({
        companyField: '',
        roleField: '',
        dutiesField: '',
        dateField:'',
        editing:false,
        id:uniqid()
    })
   
    function handleChange(e) {
        if (e.target.id === 'company') {
            setWorkExpFormState((prevState) => ({
             ...prevState, companyField: e.target.value
            }))
        } else if (e.target.id === 'role') {
            setWorkExpFormState((prevState) => ({
             ...prevState, roleField: e.target.value
            }))
        } else if (e.target.id === 'duties') {
            setWorkExpFormState((prevState) => ({
             ...prevState, dutiesField: e.target.value
            }))
        } else if (e.target.id === 'date') {
            setWorkExpFormState((prevState) => ({
             ...prevState, dateField: e.target.value
            }))
        }
    }

        return (
            <div className='job-form-container'>
                <form className='job-form' onSubmit={props.addJob.bind(this, props.toggleForm, workExpFormState)}>
                    <CloseIcon className=' close-icon cursor-pointer' onClick={props.toggleForm}></CloseIcon>
                    <label htmlFor="company">company</label>
                    <input required onChange={handleChange }type="text" id='company' name="company" value={workExpFormState.companyField} />
                    <label htmlFor="role">role</label>
                    <input required onChange={handleChange } type="text" id='role' name="role" value={workExpFormState.roleField} />
                    <label htmlFor="duties">duties</label>
                    <input required onChange={handleChange } type="text" id='duties' name="duties" value={workExpFormState.dutiesField} />
                    <label htmlFor="date">date</label>
                    <input required onChange={handleChange } type="text" id='date' name="date" value={workExpFormState.dateField} />
                    <button type='submit'>Add Job</button>
                </form>
            </div>
        )
    }

export default WorkExpForm