import React, {useState} from 'react';
import ReactDOM from 'react-dom';

const App = () => {
  <div>
    <HookSwitcher />
  </div>;
}

const HookSwitcher = () => {

  const [ color, setColor ] = useState('black');
  const [ fontSize, setFontSize ] = useState(14)

  return (
    <div style={{ padding: '10px',
      backgroundColor: color,
      fontSize: `${fontSize}px` 
     }}>
        CHANGING TEXT

      <button style={{marginTop: '10px'}}
        onClick={() => setColor('black')}>
          Dark
      </button>

      <button 
        onClick={() => setColor('gray')}>
          Light
      </button>

      <button 
        onClick={() => setFontSize((s) => s + 2) }>
          TEXT
      </button>

      <button
        onClick={() => setFontSize((s) => s - 2)}>
          TEXT --
      </button>

    </div>
  );
};

ReactDOM.render(<App />, document.getElementById('root'));