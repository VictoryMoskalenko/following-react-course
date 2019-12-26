import React, { useContext } from 'react';
import ReactDOM from 'react-dom';


const MyContext = React.createContext();

const App = () => {
  return (
    <MyContext.Provider value="Hello 123!">
      <Child />
    </MyContext.Provider>
    
  );
};

const Child = () => {   //реализация через хук useContext
  const value = useContext(MyContext);
  return <p>{value}</p>
}

// const Child = () => { // стандартная реализация через ContextAPI
//   return (
//     <MyContext.Consumer>
//       { (value) => {
//         return (
//           <p> {value} </p>
//         )
//       } 
//     }
//     </MyContext.Consumer>
//   )
// }

ReactDOM.render(<App />, document.getElementById('root'));