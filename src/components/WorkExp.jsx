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
        return (
            <div className='work-exp-container'>
                <div className="job-section-title">
                    <h4>Work Experience</h4>
                    <p onClick={this.toggleJobForm}>+</p>
                     {this.state.jobFormToggle ? <WorkExpForm></WorkExpForm> : null}
                </div>
                <div className="jobs">
                    <div className="job-info">
                        <p>Decent company name</p>
                        <p>manager of cool</p>
                        <p>Keep cool up,fired uncool people, kept ice stocked</p>
                        <p>from 12/12/1222 - 12/12/1244</p>
                    </div>
                </div>
            </div>
        )
    }
}

export default WorkExp