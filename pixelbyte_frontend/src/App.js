import React, { useEffect } from 'react';
import { Routes, Route, useNavigate } from 'react-router-dom';

import Login from './components/Login';
import Home from './container/Home';

const App = () => {
  const navigate = useNavigate();

  useEffect(() => {
    const user = localStorage.getItem('user');
    const parsedUser = user ? JSON.parse(user) : null;

    if (!parsedUser) {
      navigate('/login', { replace: true });
    }
  }, [navigate]);

  return (
    <Routes>
      <Route path="login" element={<Login />} />
      <Route path="/*" element={<Home />} />
    </Routes>
  );
};
localStorage.removeItem('user');

export default App;
