import {combineReducers} from 'redux'

import counter1 from './reducers/counter1'
import counter2 from './reducers/counter2'

export default combineReducers({
  counter1, counter2
})


// const reducer = (state = 0, action) => {

//   switch (action.type) {
//     case 'INC':
//       return state + 1;

//     default: 
//       return state;
//   }
// }

// let state = reducer(undefined, {});

// state = reducer(state, {  type: 'INC' })
// state = reducer(state, { type: 'INC' })
