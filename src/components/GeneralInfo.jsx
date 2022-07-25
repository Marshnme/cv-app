import React from 'react';
import EditIcon from '@mui/icons-material/Edit';
import '../styles/GeneralInfo.css'

class GeneralInfo extends React.Component{
    constructor(props) {
        super(props)

        this.state = {
            editName:false,
            editContact: false,
            nameField: this.props.info.userName,
            emailField: this.props.info.email,
            phoneField: this.props.info.phone,
            websiteField: this.props.info.website,
        }

        this.handleNameEdit = this.handleNameEdit.bind(this)
        this.handleNameChange = this.handleNameChange.bind(this)
        this.handleContactEdit = this.handleContactEdit.bind(this)
        this.handleContactChange = this.handleContactChange.bind(this)

    }

    handleNameEdit() {
        this.state.editName ? this.setState({ editName: false }) : this.setState({ editName: true })
    }
    handleNameChange(e) {
        e.preventDefault()
        
        this.setState({nameField:e.target.value})
    }
    
    handleContactEdit() {
        this.state.editContact ? this.setState({ editContact: false }) : this.setState({ editContact: true })
    }

    handleContactChange(e) {
        e.preventDefault()
        
        if (e.target.id === 'email') {
            this.setState({emailField:e.target.value})
        } else if (e.target.id === 'phone') {
            this.setState({phoneField:e.target.value})
        } else if (e.target.id === 'website') {
            this.setState({websiteField:e.target.value})
        }
    }

   
    

    render() {
        let { edit, info ,handleNameSubmit,handleContactSubmit} = this.props
        let {editName, editContact, nameField,emailField,phoneField,websiteField} = this.state
        return (
            <div className='general-info-container'>
                <div className="name">
                    <form  onSubmit={handleNameSubmit.bind(this,nameField,this.handleNameEdit)}>
                        {edit ? editName ? <><input type='text' onChange={this.handleNameChange} value={nameField}></input> <button type='submit'>Apply</button></> : <h3>{info.userName}
                            <EditIcon className='cursor-pointer' onClick={this.handleNameEdit}></EditIcon></h3> : <h3>{info.userName}</h3>}
                    </form>
                </div>
                <div className="contact-info">
                    {edit ?
                        editContact ? <>
                            <form onSubmit={handleContactSubmit.bind(this,emailField,phoneField,websiteField,this.handleContactEdit)}>
                                <input id='email' type='email' onChange={this.handleContactChange} value={emailField}></input>
                                <input id='phone' type='text' onChange={this.handleContactChange} value={phoneField}></input>
                                <input id='website' type='text' onChange={this.handleContactChange} value={websiteField}></input>
                                <button type='submit'>Apply</button>
                            </form>
                        </>
                        :
                            
                        <>
                            <p>{info.email}<EditIcon className='cursor-pointer' onClick={this.handleContactEdit}></EditIcon></p>
                            <p>{info.phone}</p>
                            <p>{info.website}</p>
                        </> :
                        <>
                            <p>{info.email}</p>
                            <p>{info.phone}</p>
                            <p>{info.website}</p>
                        </>}
                </div>
            </div>
        )
    }
}

export default GeneralInfo