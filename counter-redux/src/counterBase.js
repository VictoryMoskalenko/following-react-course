import React, {Component} from 'react'
import './App.css'

class App extends Component {
  state = {
    counter: 0
  }

  updateCounter(value) {
    this.setState({
      counter: this.state.counter + value
    })
  }

  render() {
    return (
      <div className={"App"}>
        <h1>Counter <strong>{this.state.counter}</strong></h1>

        <hr/>

        <div className="Actions">
          <button onClick={() => this.updateCounter(1)}>Increase
          </button>
          <button onClick={() => this.updateCounter(-1)}>Decrease</button>
        </div>
      </div>
    )
  }

}

export default App