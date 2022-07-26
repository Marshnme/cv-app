import React from 'react';
import WorkExpForm from './WorkExpForm'
import '../styles/WorkExp.css'

class WorkExp extends React.Component{
    constructor(props) {
        super(props)

        this.state = {jobFormToggle:false,}
        
        this.toggleJobForm = this.toggleJobForm.bind(this);
    }

     toggleJobForm() {
       this.state.jobFormToggle ? this.setState({jobFormToggle:false}) : this.setState({jobFormToggle:true})
    }

    render() {
        let {edit,addJob,handleJobEdit,handleJobEditSubmit,deleteJob, jobs} = this.props
        return (
            <div className='work-exp-container'>
                <div className="job-section-title">
                    <h4>Work Experience</h4>
                    {edit ?  <p onClick={this.toggleJobForm}>+</p> : null}
                     {this.state.jobFormToggle ? <WorkExpForm addJob={addJob} toggleForm={this.toggleJobForm}></WorkExpForm> : null}
                </div>



                <div className="jobs">
                    {jobs.map((job) => {
                        return(<p>{ job.companyField}</p>)
                    })}
                </div>
            </div>
        )
    }
}

export default WorkExp