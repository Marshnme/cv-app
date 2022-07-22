import React from 'react'


class EducationForm extends React.Component{
    constructor(props) {
        super(props)
    }

    render() {
        return (
            <div>
                <form>
                    <label htmlFor="school">School</label>
                    <input type="text" id='school' name="school" />
                    <label htmlFor="major">major</label>
                    <input type="text" id='major' name="major" />
                    <label htmlFor="date">date</label>
                    <input type="text" id='date' name="date" />
                </form>
            </div>
        )
    }
}

export default EducationForm