// React modules
import { useEffect } from 'react';
import { Route, BrowserRouter, Routes } from 'react-router-dom';

// Pages
import NotFound from '../../web2/src/pages/NotFound';
import Signup from '../../web2/src/pages/Signup';
import Signin from '../../web2/src/pages/Signin';
import Password from '../../web2/src/pages/Password';
import Home from '../../web2/src/pages/Home';
import Setting from '../../web2/src/pages/Setting';
import Profile from '../../web2/src/pages/Profile';
import Lab from '../../web2/src/pages/Lab';
import React from 'react';
import User from '../../web2/src/pages/User';

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home/>}></Route>
        <Route path="/signup" element={<Signup/>}></Route>
        <Route path="/signin" element={<Signin/>}></Route>
        <Route path="/password" element={<Password/>}></Route>
        <Route path="/home" element={<Home/>}></Route>
        <Route path="/user" element={<User/>}></Route>
        <Route path="/profile" element={<Profile/>}></Route>
        <Route path="/lab" element={<Lab/>}></Route>
        <Route path="*" element={<NotFound/>}></Route>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
