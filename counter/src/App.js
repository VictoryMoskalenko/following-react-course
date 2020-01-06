import React, {Component} from 'react';
import {connect} from 'react-redux';
import './App.css';

class App extends Component {
  
  render() {
    console.log(this.props)
    return (
      <div className="App">
        <h1>Counter <strong>{this.props.counter}</strong></h1>

        <hr/>

        <div className="Actions">
          <button onClick={this.props.onAdd}>
            Add 1
          </button>
          <button onClick={this.props.onSub}>
            Subtract 1
          </button>
        </div>
      </div>
    )
  }
}

function mapStateToProps(state) {
  return {
    counter: state.counter
  }
}

function mapDispatchToProps(dispatch) {
  return {
    onAdd: () => dispatch({type: 'ADD'}),
    onSub: () => dispatch({type: 'SUB'})
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(App);
