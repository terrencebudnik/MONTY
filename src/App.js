import React from 'react';
import { Routes, Route } from 'react-router-dom';
import  HomePage  from './pages/HomePage';
import  MontyHome  from './pages/MontyHome';




function App() {
  
  
  return (
    
        <Routes>
          <Route path='/' element={<HomePage />} />
          <Route path='montyhome' element={<MontyHome />} />
          
        </Routes>
    
  );
}

export default App;
