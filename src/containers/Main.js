import React from 'react'
import { Route } from 'react-router-dom'
import Index from '../components/Index'
import List from '../components/List'

const Main = () => (
  <main style={{ marginTop: '25px' }}>
    <Route path="/" exact component={Index} />
    <Route path="/list/" component={List} />
  </main>
)

export default Main
