import React from 'react';
import WorkExpForm from './WorkExpForm'
import EditIcon from '@mui/icons-material/Edit';
import '../styles/WorkExp.css'

class WorkExp extends React.Component{
    constructor(props) {
        super(props)

        this.state = {
            jobFormToggle: false,
            companyField: '',
            roleField: '',
            dutiesField: '',
            dateField:''
        }
        
        this.toggleJobForm = this.toggleJobForm.bind(this);
        this.handleJobOnChange = this.handleJobOnChange.bind(this);
        this.currentJobFieldState = this.currentJobFieldState.bind(this);
    }

     toggleJobForm() {
       this.state.jobFormToggle ? this.setState({jobFormToggle:false}) : this.setState({jobFormToggle:true})
     }
    
     currentJobFieldState(company, role,duties, date) {
        this.setState({...this.state,companyField:company,roleField: role, dutiesField:duties, dateField: date})
    }
    
    handleJobOnChange(e) {
        if (e.target.id === 'company') {
            this.setState({...this.state,companyField:e.target.value})
        } else if (e.target.id === 'role') {
            this.setState({ ...this.state, roleField: e.target.value })
        } else if (e.target.id === 'date') {
            this.setState({...this.state,dateField:e.target.value})
        } else if (e.target.id === 'duties') {
             this.setState({...this.state,dutiesField:e.target.value})
        }
    }

    render() {
        let {companyField,roleField,dutiesField,dateField} = this.state
        let { edit, addJob, handleJobEdit, handleJobEditSubmit, deleteJob, jobs } = this.props;
        
        return (
            <div className='work-exp-container'>
                <div className="job-section-title">
                    <h4>Work Experience</h4>
                    {edit ?  <p onClick={this.toggleJobForm}>+</p> : null}
                     {this.state.jobFormToggle ? <WorkExpForm addJob={addJob} toggleForm={this.toggleJobForm}></WorkExpForm> : null}
                </div>



                <div className="jobs">
                    {jobs.map((job) => {
                        return (
                            edit ?
                                job.editing ? 
                                    <form onSubmit={handleJobEditSubmit.bind(this,job.id,this.state)}>
                                        <input id='company' value={companyField} onChange={this.handleJobOnChange}></input>
                                        <input id='role' value={roleField} onChange={this.handleJobOnChange}></input>
                                        <input id='duties' value={dutiesField} onChange={this.handleJobOnChange}></input>
                                        <input id='date' value={dateField} onChange={this.handleJobOnChange}></input>
                                        <button>Apply</button>
                                    </form>
                                    :
                                <div className='job' id={job.id}>
                                    <p>{job.companyField}
                                        <EditIcon className='cursor-pointer' onClick={handleJobEdit.bind(this, job, this.currentJobFieldState.bind(job))}></EditIcon>
                                        <span className='cursor-pointer' onClick={deleteJob.bind(this, job.id)}>X</span>
                                    </p>
                                    <p>{job.roleField}</p>
                                    <p>{job.dutiesField}</p>
                                    <p>{job.dateField}</p>
                                </div>
                                :
                                <div className='job' id={job.id}>
                                    <p>{job.companyField}</p>
                                    <p>{job.roleField}</p>
                                    <p>{job.dutiesField}</p>
                                    <p>{job.dateField}</p>
                                </div>
                
                        )
                    })}
                </div>
            </div>
        )
    }
}

export default WorkExp