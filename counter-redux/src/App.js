import React, {Component} from 'react';
import {connect} from 'react-redux';
import Counter from './Counter';
import './App.css';
import { add, sub, addNumber, asyncAdd } from './redux/actions/actions';

class App extends Component {
  
  render() {
    // console.log(this.props)
    return (
      <div className="App">
        <h1>Counter <strong>{this.props.counter}</strong></h1>

        <hr/>

        <div className="Actions">
          <button onClick={this.props.onAdd}>
            Increase
          </button>
          <button onClick={this.props.onSub}>
            Decrease
          </button>
        </div>

        <div className="Actions">
          <button onClick={() => this.props.onAddNumber(15)}>
            + 15
          </button>
          <button onClick={() => this.props.onAddNumber(-17)}>
            - 17
          </button>
        </div>

        <div className="Actions">
          <button onClick={() => this.props.onAsyncAdd(100)}>
            Async Add 100
          </button>
        </div>

        <Counter />
      </div>
    )
  }
}

function mapStateToProps(state) {
  // console.log('State', state)
  return {
    counter: state.counter1.counter
  }
}

// function mapDispatchToProps(dispatch) {
//   return {
//     onAdd: () => dispatch({type: 'ADD'}),
//     onSub: () => dispatch({type: 'SUB'}),
//     onAddNumber: number => dispatch ({type: 'ADD_NUMBER', payload: number})
//   }
// }

function mapDispatchToProps(dispatch) {
  return {
    onAdd: () => dispatch(add()),
    onSub: () => dispatch(sub()),
    onAddNumber: number => dispatch (addNumber(number)),
    onAsyncAdd: number => dispatch(asyncAdd(number)) 
  }
}


export default connect(mapStateToProps, mapDispatchToProps)(App);
