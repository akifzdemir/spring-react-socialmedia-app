import { Button } from '@chakra-ui/react';
import { Route, Routes } from 'react-router-dom';
import './App.css';
import AuthContext, { AuthProvider } from './context/AuthContext';
import Register from './pages/Register';
import Login from './pages/Login'
import Profile from './pages/Profile';
import Home from './pages/Home';
import { useContext } from 'react';

function App() {


  return (
    <>
   <AuthProvider>
 
    <Routes>
      <Route path='/' element={<Register/>}/>
      <Route path='/profile' element={<Profile/>} />
      <Route path='/login' element={<Login/>}/>
      <Route path='/home' element={<Home/>} />
    </Routes>
    </AuthProvider>
    </>
  );
}

export default App;
