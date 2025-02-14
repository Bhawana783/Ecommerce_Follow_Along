import React from 'react';
import "./App.css";
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import { LoginPage } from "./Routes/routes";  // Assuming this is where your LoginPage component is defined
import Home from './pages/Home.';  // Corrected import for Home.js

const App = () => {
  return (
    <div>
      <BrowserRouter>
        <Routes>
          {/* Route for the login page */}
          <Route path='/login' element={<LoginPage />} />
          
          {/* Route for the homepage displaying product cards */}
          <Route path='/' element={<Home />} /> 
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
