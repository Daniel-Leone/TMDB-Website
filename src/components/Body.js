import React, { useState } from 'react'
import ComponentePrueba from './ComponentePrueba'
import { firebaseConfig } from './FirebaseUtil'
import Ingresar from './Ingresar'
import MovieList from './MovieList'
import UserProfile from './UserProfile'
import { getAuth, onAuthStateChanged  } from "firebase/auth";
import UserOptions from './UserOptions'


const Body = () => {
  
  const [login, setLogin] = useState(false)

  firebaseConfig()

  onAuthStateChanged(getAuth(), (user) => {
    if (user) {
      setLogin(true)
    } else {
      setLogin(false)
    }
  })

  return(
    <>
    { 
      login ? <UserProfile/> : <Ingresar/>
    }
    {
      login ? <ComponentePrueba/> : <MovieList/>
    }

    {/* <UserOptions/> */}
    </>
  )
}

export default Body