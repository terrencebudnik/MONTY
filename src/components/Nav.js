import React from 'react';
import Wake from '../actions/Wake';
import Feed from '../actions/Feed';
import '../css/nav.css'

export default function Navbar() {
  
  const [wakeAction, setWakeAction] = React.useState(false);
  const [feedAction, setFeedAction] = React.useState(false);
  
  return (
    <>
    <div className='nav'>
        
   
            <button className='navButton' onClick={() => setWakeAction(true)}>Wake Up</button>
              <Wake 
              show={wakeAction}
              onHide={() => setWakeAction(false)}/> 
                
            <button className='navButton' onClick={() => setFeedAction(true)}>Feed</button>
              <Feed
              show={feedAction}
              onHide={() => setFeedAction(false)}/> 
       
        
      
            <button className='navButton'>Play</button>
       
        
      
            <button className='navButton'>Chill</button>
       
            <button className='navButton'>Sleep</button>
        
      </div>
    
    </>
  )
}
