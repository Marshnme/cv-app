import React from 'react'
import '../styles/Education.css'

class EducationForm extends React.Component{
    constructor(props) {
        super(props)

        this.state = {
            schoolField: '',
            majorField: '',
            dateField:''
        }
        this.handleChange = this.handleChange.bind(this)
    }

    handleChange(e) {
        if (e.target.id === 'school') {
            this.setState({...this.state,schoolField:e.target.value})
        } else if (e.target.id === 'major') {
            this.setState({...this.state,majorField:e.target.value})
        } else if (e.target.id === 'date') {
            this.setState({...this.state,dateField:e.target.value})
        }
    }

    render() {
        let {schoolField,majorField,dateField} = this.state
        let {addSchool,formToggle} = this.props
        return (
            <div className='education-form-container'>
                <form className='education-form' onSubmit={addSchool.bind(this,formToggle,this.state)}>
                    <label htmlFor="school">School</label>
                    <input type="text" id='school' name="school" onChange={this.handleChange} value={schoolField} />
                    <label htmlFor="major">major</label>
                    <input type="text" id='major' name="major" onChange={this.handleChange} value={majorField} />
                    <label htmlFor="date">date</label>
                    <input type="text" id='date' name="date" onChange={this.handleChange} value={dateField} />
                    <button type='submit'>Add School</button>
                </form>
            </div>
        )
    }
}

export default EducationForm