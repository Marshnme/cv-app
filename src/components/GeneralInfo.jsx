import React,{useState,useEffect} from 'react';
import EditIcon from '@mui/icons-material/Edit';
import '../styles/GeneralInfo.css'

const GeneralInfo = (props) => {
    const [editName, setEditName] = useState(false)
    const [editContact, setEditContact] = useState(false)
    const [nameField,setNameField] = useState(props.info.userName)
    const [emailField,setEmailField] = useState(props.info.email)
    const [phoneField,setPhoneField] = useState(props.info.phone)
    const [websiteField,setWebsiteField] = useState(props.info.website)




    function handleNameEdit() {
        editName ? setEditName(false) : setEditName(true)
    }
    function handleNameChange(e) {
        e.preventDefault()
        
        setNameField(e.target.value)
    }
    
    function handleContactEdit() {
        editContact ? setEditContact(false) : setEditContact(true)
    }

    function handleContactChange(e) {
        e.preventDefault()
        
        if (e.target.id === 'email') {
            setEmailField(e.target.value)
        } else if (e.target.id === 'phone') {
            setPhoneField(e.target.value)
        } else if (e.target.id === 'website') {
            setWebsiteField(e.target.value)
        }
    }

   console.log(props.info.website)
        return (
            <div className='general-info-container'>
                <div className="name">
                    <form  onSubmit={props.handleNameSubmit.bind(this,nameField,handleNameEdit)}>
                        {props.edit ? editName ? <><input type='text' onChange={handleNameChange} value={nameField}></input> <button type='submit'>Apply</button></> : <h3>{props.info.userName}
                            <EditIcon className='cursor-pointer' fontSize='small' onClick={handleNameEdit}></EditIcon></h3> : <h3>{props.info.userName}</h3>}
                    </form>
                </div>
                <div className="contact-info">
                    {props.edit ?
                        editContact ? <>
                            <form onSubmit={props.handleContactSubmit.bind(this,emailField,phoneField,websiteField,handleContactEdit)}>
                                <input id='email' type='email' onChange={handleContactChange} value={emailField}></input>
                                <input id='phone' type='text' onChange={handleContactChange} value={phoneField}></input>
                                <input id='website' type='text' onChange={handleContactChange} value={websiteField}></input>
                                <button type='submit'>Apply</button>
                            </form>
                        </>
                        :
                            
                        <>
                            <p>{props.info.email}<EditIcon className='cursor-pointer' fontSize='small' onClick={handleContactEdit}></EditIcon></p>
                            <p>{props.info.phone}</p>
                            <a  href={'https://' + props.info.website} target='_blank' rel='noreferrer'>{props.info.website}</a>
                        </> :
                        <>
                            <p>{props.info.email}</p>
                            <p>{props.info.phone}</p>
                            <a  href={'https://' + props.info.website} target='_blank' rel='noreferrer'>{props.info.website}</a>
                        </>}
                </div>
            </div>
        )
}

export default GeneralInfo