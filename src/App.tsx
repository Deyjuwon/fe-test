import React from 'react';
import './App.scss';
import { Route, Routes } from 'react-router-dom';
import Login from "./pages/Login/Login"
import Dashboard from './pages/Dashboard/Dashboard';

function App() {
  return (
    <div className="">
      <Routes>
        <Route path='/login' element={<Login />} />
        <Route path='/dashboard' element={<Dashboard />} />
      </Routes>
    </div>
  );
}

export default App;
