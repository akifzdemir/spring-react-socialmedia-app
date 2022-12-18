import { Button } from '@chakra-ui/react';
import { Route, Routes } from 'react-router-dom';
import './App.css';
import Nav from './components/Nav';
import { AuthProvider } from './context/AuthContext';
import Home from './pages/Home';
import Register from './pages/Register';

function App() {
  return (
    <>
   <AuthProvider>
    <Routes>
      <Route path='/' element={<Register/>}/>
      <Route path='/home' element={<Home/>} />
    </Routes>
    </AuthProvider>
    </>
  );
}

export default App;
