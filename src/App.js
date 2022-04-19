import { BrowserRouter, Route, Routes } from 'react-router-dom';
import './App.css';
import Body from './components/Body';

function App() { 

  return (
    <BrowserRouter>
      {/* EL NAVBAR PUEDE IR ACA */}
      <Routes>
        <Route path='/' element={<Body/>}/>
      </Routes>
    </BrowserRouter>
  )
}

export default App;
