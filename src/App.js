import { BrowserRouter, Route, Routes } from 'react-router-dom';
import './App.css';
import Body from './components/Body';
import Login from './components/Login';
import Register from './components/Register';
import { UserProvider } from './components/UseContextProvider';
import UserProfile from './components/UserProfile';

function App() { 

  // <UserProvider>
  //   <Register/>
  //   <Body/>
  //   <UserProfile/>
  // </UserProvider>

  return (
    <BrowserRouter>
      <Routes>
        <Route path='/login' element={<Login/>} />
        <Route path='/register' element={<Register/>} />
        <Route path='/' element={<Body/>}/>
      </Routes>
    </BrowserRouter>
  )
}

export default App;
