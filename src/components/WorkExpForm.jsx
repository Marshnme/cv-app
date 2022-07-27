import React from 'react'
import uniqid from 'uniqid';
import CloseIcon from '@mui/icons-material/Close';


class WorkExpForm extends React.Component{
    constructor(props) {
        super(props)


        this.state = {
            companyField: '',
            roleField: '',
            dutiesField: '',
            dateField:'',
            editing:false,
            id:uniqid()
        }
        this.handleChange = this.handleChange.bind(this)
    }

     handleChange(e) {
        if (e.target.id === 'company') {
            this.setState({...this.state,companyField:e.target.value})
        } else if (e.target.id === 'role') {
            this.setState({...this.state,roleField:e.target.value})
        } else if (e.target.id === 'duties') {
            this.setState({...this.state,dutiesField:e.target.value})
        } else if (e.target.id === 'date') {
            this.setState({...this.state,dateField:e.target.value})
        }
    }

    render() {
        let {companyField,roleField,dutiesField,dateField} = this.state
        let { addJob, toggleForm } = this.props;
        return (
            <div className='job-form-container'>
                <form className='job-form' onSubmit={addJob.bind(this, toggleForm, this.state)}>
                    <CloseIcon className=' close-icon cursor-pointer' onClick={toggleForm}></CloseIcon>
                    <label htmlFor="company">company</label>
                    <input required onChange={this.handleChange }type="text" id='company' name="company" value={companyField} />
                    <label htmlFor="role">role</label>
                    <input required onChange={this.handleChange } type="text" id='role' name="role" value={roleField} />
                    <label htmlFor="duties">duties</label>
                    <input required onChange={this.handleChange } type="text" id='duties' name="duties" value={dutiesField} />
                    <label htmlFor="date">date</label>
                    <input required onChange={this.handleChange } type="text" id='date' name="date" value={dateField} />
                    <button type='submit'>Add Job</button>
                </form>
            </div>
        )
    }
}

export default WorkExpForm