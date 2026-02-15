import React, { useEffect, useState } from 'react'
import './App.css'
import axios from 'axios';
import Register from './routes/Register'
import Logout from './routes/Logout';
import Login from './routes/Login';
import { Route, Routes } from 'react-router-dom'
import { useNavigate } from 'react-router-dom'; 
import Alldata from './routes/Alldata';

 
function App() {
  const navigate = useNavigate();
  const handleLogout = () => {
    navigate('/');
  }
  const handleLogin = () => {
    navigate('/logout');
  }
  const handleRegister = () => {
    navigate('/login');
  }

  return (
    <>
     <Routes>
      <Route path='/' element={<Register handleRegister={handleRegister} />} />
      <Route path='/login' element={<Login handleLogin={handleLogin} />} />
      <Route path='/logout' element={<Logout handleLogout={handleLogout} />} />
      <Route path='/alldata' element={<Alldata />} />
    </Routes>
    </>
  ) 
}

export default App
