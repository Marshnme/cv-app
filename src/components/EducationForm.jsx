import React from 'react'
import '../styles/Education.css'

class EducationForm extends React.Component{
    constructor(props) {
        super(props)
    }

    render() {
        return (
            <div className='education-form-container'>
                <form className='education-form'>
                    <label htmlFor="school">School</label>
                    <input type="text" id='school' name="school" />
                    <label htmlFor="major">major</label>
                    <input type="text" id='major' name="major" />
                    <label htmlFor="date">date</label>
                    <input type="text" id='date' name="date" />
                    <button type='submit'>Add School</button>
                </form>
            </div>
        )
    }
}

export default EducationForm