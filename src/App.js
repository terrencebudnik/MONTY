import React from 'react';
import { Routes, Route } from 'react-router-dom';
import  HomePage  from './pages/HomePage';
import  MontyHome  from './pages/MontyHome';
import MontyBuild from './pages/MontyBuild';



function App() {
  
  
  return (
    
        <Routes>
          <Route path='/' element={<HomePage />} />
          <Route path='montyhome' element={<MontyHome />} />
          <Route path='montybuild' element={<MontyBuild />} />
        </Routes>
    
  );
}

export default App;
