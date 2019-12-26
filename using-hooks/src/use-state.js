import React, { useState } from 'react';
import ReactDOM from 'react-dom';

const App = () => {
  return (
    <div>
      <HookSwitcher />
    </div>
  )
}

const HookSwitcher = () => {

 const [ color, setColor ] = useState('gray');
 const [ fontSize, setFontSize ] = useState(14);

  return (
    <div style={{ padding: '10px',
       backgroundColor: color,
       fontSize: `${fontSize}px`}}> Change my size!!!

      <button 
        onClick={() => setColor('gray')}>
        Dark
      </button>

      <button 
        onClick={() => setColor('white')}>
        Light
      </button>

      <button onClick={() => setFontSize((s) => s + 2)}>+ size</button>

    </div>
  );

};
// const Person = () => {
  
//   const [ firstName, setFirstName ] = useState('Bob');
//   const [ lastName, setLastName ] = useState('Smith');
  // const [person, setPerson] = useState({  //
  //   firstName: 'Bob',
  //   lastName: 'Smith'
  // });
  // setPerson((person) => {  // новое значение зависит от старого значения state
  //   return {
  //     ...person, firstName: 'Mike'} //сохранить все поля и значения объекта 
  //person, a firstName изменить
  // }

//   setFirstName('Mike') //сохранится только FirstName
// }

ReactDOM.render(<App />, document.getElementById('root'));

