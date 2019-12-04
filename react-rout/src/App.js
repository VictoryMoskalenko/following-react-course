import React, {Component} from 'react'
import './App.scss'
import {Route, NavLink} from 'react-router-dom'
import About from './About/About'
import Cars from './Cars/Cars'

class App extends Component {
  render() {

    return (
      <div>
        <nav className="nav">
          <ul>
            <li>
              <NavLink to="/" exact >Home</NavLink>
            </li>
            <li>
              <NavLink to="/about"
                 activeStyle={{color: "blue"}}
              >About</NavLink>
            </li>
            <li>
              <NavLink to={{
                pathname: "/cars"
              }}>Cars</NavLink>
            </li>
          </ul>
        </nav>

        <hr/>

        {/*localhost:3000*/}
        {/* <Route path="/" exact render={() => <h1>Home Page</h1>} /> */}

        <Route path="/" exact render={() => <h1>Home Page</h1>} />
        <Route path="/about" component={About} />
        <Route path="/cars" component={Cars} />

        {/* <About />
        <Cars /> */}
      </div>
    );
  }
}

export default App
