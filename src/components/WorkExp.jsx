import React,{useState,useEffect} from 'react';
import WorkExpForm from './WorkExpForm'
import AddIcon from '@mui/icons-material/Add';
import EditIcon from '@mui/icons-material/Edit';
import DeleteIcon from '@mui/icons-material/Delete';
import '../styles/WorkExp.css'

const WorkExp = (props) => {
    const [workExpState, setWorkExpState] = useState({
        jobFormToggle: false,
        companyField: '',
        roleField: '',
        dutiesField: '',
        dateField:''
    })

    function toggleJobForm() {
        workExpState.jobFormToggle ? setWorkExpState((prevState) => ({
            ...prevState, jobFormToggle:false
        })) :
            setWorkExpState((prevState) => ({
            ...prevState, jobFormToggle:true
        }))
     }
    
     function currentJobFieldState(company, role,duties, date) {
        setWorkExpState((prevState) => ({
            ...prevState, companyField: company, roleField: role, dutiesField: duties, dateField: date
        }))
    }
    
    function handleJobOnChange(e) {
        if (e.target.id === 'company') {
            setWorkExpState((prevState) => ({
             ...prevState, companyField: e.target.value
            }))
        } else if (e.target.id === 'role') {
            setWorkExpState((prevState) => ({
             ...prevState, roleField: e.target.value
            }))
        } else if (e.target.id === 'date') {
           setWorkExpState((prevState) => ({
             ...prevState, dateField: e.target.value
            }))
        } else if (e.target.id === 'duties') {
            setWorkExpState((prevState) => ({
             ...prevState, dutiesField: e.target.value
            }))
        }
    }

        
        return (
            <div className='work-exp-container'>
                <div className="job-section-title">
                    <h4>Work Experience</h4>
                    {props.edit ?  <AddIcon className='cursor-pointer'  onClick={toggleJobForm}>+</AddIcon> : null}
                     {workExpState.jobFormToggle ? <WorkExpForm addJob={props.addJob} toggleForm={toggleJobForm}></WorkExpForm> : null}
                </div>



                <div className="jobs">
                    {props.jobs.length < 1 ? <div className='add-jobs-box cursor-pointer' onClick={toggleJobForm}><p>Add Jobs...</p></div> : props.jobs.map((job) => {
                        return (
                            props.edit ?
                                job.editing ? 
                                    <form className='job-edit-form' onSubmit={props.handleJobEditSubmit.bind(this, job.id, workExpState)}>
                                        <label className='label-space' htmlFor='company'>Company</label>
                                        <input required type='text' id='company' name='company' value={workExpState.companyField} onChange={handleJobOnChange}></input>
                                        <label className='label-space' htmlFor='role'>role</label>
                                        <input required type='text' id='role' name='role' value={workExpState.roleField} onChange={handleJobOnChange}></input>
                                        <label className='label-space' htmlFor='duties'>duties</label>
                                        <input required type='text' id='duties' name='duties' value={workExpState.dutiesField} onChange={handleJobOnChange}></input>
                                        <label className='label-space' htmlFor='date'>date</label>
                                        <input required type='text' id='date' name='date' value={workExpState.dateField} onChange={handleJobOnChange}></input>
                                        <button className='edit-apply'>Apply</button>
                                    </form>
                                    :
                                <div className='job' key={job.id}>
                                    <p>{job.companyField}
                                        <EditIcon className='cursor-pointer' fontSize='small'  onClick={props.handleJobEdit.bind(this, job, currentJobFieldState.bind(job))}></EditIcon>
                                        <DeleteIcon className='cursor-pointer' fontSize='small'  onClick={props.deleteJob.bind(this, job.id)}>X</DeleteIcon>
                                    </p>
                                    <p>{job.roleField}</p>
                                    <p>{job.dutiesField}</p>
                                    <p>{job.dateField}</p>
                                </div>
                                :
                                <div className='job' key={job.id}>
                                    <p>{job.companyField}</p>
                                    <p>{job.roleField}</p>
                                    <p>{job.dutiesField}</p>
                                    <p>{job.dateField}</p>
                                </div>
                
                        )
                    }) }
                    
                </div>
            </div>
        )
}

export default WorkExp