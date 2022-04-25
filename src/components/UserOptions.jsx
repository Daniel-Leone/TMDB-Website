import React from 'react'
import userIcon from './images/usuario.png'
import { useUserContext } from './UseContextProvider'

const UserOptions = () => {

    const {userName} = useUserContext()

  return (
    <div className='userOptions'>
        <ul>
            <div>
                <img src={userIcon}/>
                <h3>{userName}</h3>
            </div>
            <li>Favoritos</li>
            {/* <li>Lorem</li>
            <li>Lorem</li>
            <li>Lorem</li>
            <li>Lorem</li> */}
            <li>Cerrar Cesión</li>
        </ul>
    </div>
  )
}

export default UserOptions