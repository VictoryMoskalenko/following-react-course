import React, { useEffect, useState} from 'react';
import ReactDOM from 'react-dom';

 const App = () => {
  const [value, setValue] = useState(0);
  const [visible, setVisible] = useState(true);

  if (visible) {
   return (
     <div>
       <button
        onClick={() => setValue((v) => v + 1)}>+</button>
      <button 
        onClick={() => setVisible(false)}>hide</button>
        
        <HookCounter value={value} />
        <HookSwitcher />
        
     </div>
   );
  } else {
    return <button
      onClick={() => setVisible(true)}>Show</button>
  }
 };

 const HookCounter = ({ value }) => {

  useEffect(() => console.log('mount'), [])
   
   return <p> {value} </p>
 };

 const HookSwitcher = () => {

  const [ color, setColor ] = useState('gray');
  const [ fontSize, setFontSize ] = useState(14);

  return (
    <div style={{ padding: '10px',
         backgroundColor: color,
         fontSize: `${fontSize}px`,
         }}
         >
           CHANGING TEXT
           <br />
      <button style={{marginTop: '10px'}} 
        onClick={() => setColor('gray')}>
          Dark
      </button>

      <button style={{marginTop: '10px'}}
        onClick={() => setColor('white')}>
          Light
      </button>

      <br />

      <button style={{marginTop: ('20px')}}
         onClick={() => setFontSize((s) => s + 2)}>
           TEXT ++
      </button>

      <button style={{marginTop: '20px', marginLeft: '20px'}}
          onClick={() => setFontSize((s) => s - 1)}>TEXT --</button>


    </div>
  );
};

 ReactDOM.render(<App />, document.getElementById('root'));