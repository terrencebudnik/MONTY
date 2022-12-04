import sleeping from '../animations/monty-sleeping.gif'; 
import wake from '../animations/monty-waking-up.gif'
import '../css/sleeping.css'

export default function Sleeping() {
  
  function wakeUp() {
    document.getElementsByClassName("sleepingHome").innerHTML =""
  }
  return (
  <>
    <div className='sleepingHome'>
      <img id='sleeping' src={sleeping} />
      <button onClick={wakeUp}>Wake Up</button>
    </div>
    <div className='wakeHome'>
    <img id='wake' src={wake} />
    </div>
  </>
        
    
  );
}


