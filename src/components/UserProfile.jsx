import React from 'react'
import userIcon from './images/usuario.png'
import { useUserContext } from './UseContextProvider'

const UserProfile = () => {

  const {userName} = useUserContext()

  return (
    <div className='currentUser'>
        <div className='userImg'>
            <img src={userIcon}/>
        </div>
        <h4>{userName}</h4>
    </div>
  )
}

export default UserProfile