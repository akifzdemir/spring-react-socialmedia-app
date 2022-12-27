import { Route, Routes } from 'react-router-dom';
import './App.css';
import { AuthProvider } from './context/AuthContext';
import Register from './pages/Register';
import Login from './pages/Login'
import Home from './pages/Home';
import Profile from './pages/Profile';

function App() {
  return (
    <>
      <AuthProvider>
        <Routes>
          <Route path='/' element={<Register />} />
          <Route path='/login' element={<Login />} />
          <Route path='/home' element={<Home />} />
          <Route path='/profile/:userId' element={<Profile />} />
        </Routes>
      </AuthProvider>

    </>
  );
}

export default App;
