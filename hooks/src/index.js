import React from 'react'
import ReactDOM from 'react-dom'

const App = () => {
    const [value, setValue] = useState(0);
    const [visible, setVisible] = useState(true);

    if (visible) {
      return (
        <div>
          <button 
            onClick={() => setValue((v) => v + 1)}>+</button>
        </div>
      )
    }
  
}


ReactDOM.render(<App />, document.getElementById('root'));