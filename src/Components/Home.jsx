import React from 'react'
import { Routes, Route } from "react-router-dom";
import Page1 from './Page1'
import Login from './Login';
import Page2 from './Page2';

const Home = () => {
  return (
    <div>
      <Routes>
        <Route path="/" element={<Page1 />} />
        <Route path="/login" element={<Login />} />
        <Route path="/page2" element={<Page2 />} />
      </Routes>
    </div>
  )
}

export default Home;
