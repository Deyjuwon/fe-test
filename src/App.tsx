import React from 'react';
import './App.scss';
import { Route, Routes } from 'react-router-dom';
import Login from "./pages/Login/Login"


function App() {
  return (
    <div className="">
      <Routes>
        <Route path='/login' element={<Login />} />
      </Routes>
    </div>
  );
}

export default App;
