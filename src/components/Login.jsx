import React from 'react'
import { Link, useNavigate } from 'react-router-dom'
import { iniciarSesionEnFirebase } from './FirebaseUtil'

const Login = () => {

    const navigate = useNavigate()

    const ingresar = async (e)=>{
        e.preventDefault()

        let userEmail = document.querySelector('#userEmail').value
        let userPassword = document.querySelector('#userPassword').value
        
        let inicioDeSesion = await iniciarSesionEnFirebase(userEmail, userPassword)

        if(inicioDeSesion){
            navigate('/', {replace: true})
        } else {
            alert('inicio de sesion incorrecto')
        }

    }

  return (
    <div className='loginRegisterPage'>
        <form>
            <input type='email' placeholder='email@email.com' id='userEmail' required/>
            <input type='password' placeholder='*****' id='userPassword' required/>

            <button type='submit' onClick={ingresar}>Iniciar Sesión</button>

            <Link to='/register' style={{textDecoration: 'none'}}> <p style={{color:'#ccc'}}>¿No tienes una cuenta? ¡Registrate aquí!</p> </Link>
        </form>
    </div>
  )
}

export default Login