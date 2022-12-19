import { Button } from '@chakra-ui/react';
import { Route, Routes } from 'react-router-dom';
import './App.css';
import { AuthProvider } from './context/AuthContext';
import Home from './pages/Home';
import Register from './pages/Register';
import Login from './pages/Login'

function App() {
  return (
    <>
   <AuthProvider>
    <Routes>
      <Route path='/' element={<Register/>}/>
      <Route path='/home' element={<Home/>} />
      <Route path='/login' element={<Login/>}/>
    </Routes>
    </AuthProvider>
    </>
  );
}

export default App;
