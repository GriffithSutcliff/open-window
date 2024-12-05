import React, { useState } from 'react';
import Window from './components/Window';

function App() {

  const [show, setShow] = useState(false)
  
  function openWindow(){
    console.log('hello')
    setShow(!show)
  }

  return (
    <div className="App">
      {show ? (<Window openWindow={openWindow} show={show}/>) : (<button className='btn-open' onClick={openWindow}>Открой меня</button>)}
    </div>
  );
}

export default App;
