import React from 'react';
import { Route, Routes } from "react-router-dom";
import Home from './components/Home';
import SequrityPage from './components/SequrityPage';
import Login from './components/Login';
import SignUp from './components/SignUp';
function App() {
  return (
    <Routes>
      <Route path="/" element={<Login />} />
      <Route path="/SignUp" elements={<SignUp />} />
      <Route path="/Home" element={<Home />} />
      <Route path="/SequrityPage" element={<SequrityPage />} />
    </Routes>
  );
}

export default App;