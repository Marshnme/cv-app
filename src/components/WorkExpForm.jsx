import React from 'react'


class WorkExpForm extends React.Component{
    constructor(props) {
        super(props)
    }

    render() {
        return (
            <div>
                <form>
                    <label htmlFor="company">company</label>
                    <input type="text" id='company' name="company" />
                    <label htmlFor="role">role</label>
                    <input type="text" id='role' name="role" />
                    <label htmlFor="duties">duties</label>
                    <input type="text" id='duties' name="duties" />
                    <label htmlFor="date">date</label>
                    <input type="text" id='date' name="date" />
                </form>
            </div>
        )
    }
}

export default WorkExpForm