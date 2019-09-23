import React from 'react'
import { Provider } from 'react-redux'
import { BrowserRouter as Router } from 'react-router-dom'
import Header from './containers/Header'
import Main from './containers/Main'
import store from './redux/store/appStore'
import './App.css'

function App() {
  return (
    <Provider store={store}>
      <Router>
        <div className="App">
          <Header />
          <Main />
        </div>
      </Router>
    </Provider>
  )
}

export default App
