import React, { useState } from 'react';


const Person = () => {
  const [ person, setPerson ] = useState({
    firstName: 'Bob',
    lastName: 'Smith'
  });

  setPerson((person) => {
    return {
      firstName: 'Mike',
      lastName: person.lastName
    }
  })

  setPerson((person) => {
    return {...person, firstName: 'Mike'}
  })

  // const [ firstName, setFirstName ] = useState('Bob');
  // const [ lastName, setLastName ] = useState('Smith')

  // setFirstName({firstName: 'Mike '});

}; 