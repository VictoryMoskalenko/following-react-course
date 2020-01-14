const redux = require ('redux')

const initialState = {
  counter: 0
}

//Reducer
const reducer = (state = initialState, action) => {

  if (action.type === 'ADD') {
    return {
      counter: state.counter + 1 
    }
  }

  if (action.type === "SUB") {
    return {
      counter: state.counter - 1
    }
  }

  if (action.type === "ADD_NUMBER") {
    return {
      counter: state.counter + action.value
    }
  }
  return state
}

//Store - хранятся все данные
const store = redux.createStore(reducer)
// console.log('1', store.getState())

store.subscribe(() => {
  console.log('Subscribe', store.getState())
})

//Actions

const addCounter = {
  type: 'ADD'
}

store.dispatch(addCounter)
// console.log('2', store.getState())

store.dispatch({ type: 'SUB' })
// console.log('3', store.getState())

store.dispatch({ type: 'ADD_NUMBER', value: 10 })
// console.log('4', store.getState())



//-----------------------------------------------------------------



const redux = require('redux') //импорт библиотеки redux from node.js

const initialState = {  //объект, к-й описывает все приложение
  counter: 0
}

//Reducer
const reducer = (state = initialState, action) => {
  //главное правило - всегда возвращать новый стейт из этой функции
  return state
}

// Store хранятся все данные всё состояние всего приложения

// У каждого store есть функция getState(), к-я позволяет получить текущее состояние store

const store = redux.createStore(reducer);
console.log(store.getState())

//Actions    меняет состояние нашего store

const addCounter = {
  type: 'ADD'
}

store.dispatch(addCounter)

function createStore(reducer, initialState) {
  let state = initialState
  return {
    dispatch: action => {state = reducer(state, action)},
    getState: () => state
  }
}