import React from 'react';
import Wake from '../actions/Wake';
import '../css/nav.css'

export default function Navbar() {
  
  const [wakeAction, setWakeAction] = React.useState(false);
  
  return (
    <>
    <div className='nav'>
        
   
            <button className='navButton' onClick={() => setWakeAction(true)}>Wake Up</button>
              <Wake 
              show={wakeAction}
              onHide={() => setWakeAction(false)}/> 
              
     
        
      
            <button className='navButton'>Feed</button>
       
        
      
            <button className='navButton'>Play</button>
       
        
      
            <button className='navButton'>Chill</button>
       
            <button className='navButton'>Sleep</button>
        
      </div>
    
    </>
  )
}
