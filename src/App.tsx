import React from 'react';
import './App.scss';
import { Route, Routes, Navigate } from 'react-router-dom';
import Login from "./pages/Login/Login";
import Dashboard from './pages/Dashboard/Dashboard';
import UserDetails from './pages/UserDetails/UserDetails';

function App() {
  return (
    <div className="">
      <Routes>
        {/* Redirect root ("/") to the login page */}
        <Route path="/" element={<Navigate to="/login" />} />

  
        <Route path="/login" element={<Login />} />
        <Route path="/dashboard" element={<Dashboard />} />
        <Route path='/user/:id' element={<UserDetails />} />
      </Routes>
    </div>
  );
}

export default App;
