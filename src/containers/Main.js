import React from 'react'
import { Route } from 'react-router-dom'
import Index from '../components/Index'
import List from '../components/List'
import ShowTask from '../components/ShowTask'

const Main = () => (
  <main style={{ marginTop: '25px' }}>
    <Route path="/" exact component={Index} />
    <Route path="/list/" exact component={List} />
    <Route path="/list/:id" exact component={ShowTask} />
  </main>
)

export default Main
