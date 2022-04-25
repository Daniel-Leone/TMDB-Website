import React from 'react'
import { Link } from 'react-router-dom'

const Ingresar = () => {

  return (
    <div className='ingresarButton'>
        <Link to='/login'> <button>Ingresar</button> </Link>
    </div>
  )
}

export default Ingresar