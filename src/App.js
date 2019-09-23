import React from 'react'
import { BrowserRouter as Router } from 'react-router-dom'
import Header from './containers/Header'
import Main from './containers/Main'
import './App.scss'

function App() {
  return (
    <Router>
      <div className="App">
        <Header />
        <Main />
      </div>
    </Router>
  )
}

export default App
