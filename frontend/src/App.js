import React from 'react';
import { Routes, Route, useNavigate } from 'react-router-dom';
import './App.css';
import Login from "./Pages/Login/Login";
import Register from "./Pages/Register/Register";
import NavBar from './Components/NavBar/NavBar';
import Chat from './Pages/Chat/Chat';
import Settings from './Pages/Settings/Settings';
import User from './Pages/Users/User';

const App = () => {
  const navigate = useNavigate();

  const isLoginRoute = window.location.pathname === '/' || window.location.pathname === '/register';

  return (
    <div className="App flex">
      {!isLoginRoute && <NavBar />}
      <Routes>
        <Route path='/' element={<Login navigate={navigate} />} />
        <Route path='/register' element={<Register />} />
        <Route path='/users' element={ <User /> } />
        <Route path='/chats' element={<Chat />} />
        <Route path='/settings' element={<Settings />} />
      </Routes>
    </div>
  );
};

export default App;
