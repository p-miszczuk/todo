import React from 'react'
import './App.css'
import {
  BrowserRouter as Router,
  Route,
  Link,
} from 'react-router-dom'
import Index from './components/Index'
import List from './components/List'

function App() {
  return (
    <Router>
      <div className="App">
        <header>
          <nav>
            <ul>
              <li>
                <Link to="/">Home</Link>
              </li>
              <li>
                <Link to="/list/">List</Link>
              </li>
            </ul>
          </nav>
        </header>
        <main>
          <Route path="/" exact component={Index} />
          <Route path="/list/" component={List} />
        </main>
      </div>
    </Router>
  )
}

export default App
