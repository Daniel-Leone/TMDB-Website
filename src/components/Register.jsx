import React from 'react'
import { useNavigate } from 'react-router-dom'
import {  firebaseConfig, registrarUsuariosEnFirebase } from './FirebaseUtil'
import { useUserContext } from './UseContextProvider'

const Register = () => {

    const navigate = useNavigate()

    const {setUserName} = useUserContext()

    firebaseConfig()

    const registrarUsuario = (e)=>{
        e.preventDefault()
        let userEmail = document.querySelector('#newUserEmail').value
        let userPassword = document.querySelector('#newUserPassword').value

        registrarUsuariosEnFirebase(userEmail, userPassword)

        
        navigate('/login', {replace: true})    
      }
      
      let newUserName = document.querySelector('#userName').value

      setUserName(newUserName)
    
    return (
      <div className='loginRegisterPage'>
        <form>
                <input type='text' placeholder='user name' id='userName' required/>
                <input type='email' placeholder='email@email.com' id='newUserEmail' required/>
                <input type='password' placeholder='*****' id='newUserPassword' required/>
            <button type='submit' onClick={registrarUsuario} style={{width:'5rem'}}>Registrarse</button>
        </form>
    </div>
  )
}


export default Register