import React from 'react'
import { Route } from 'react-router-dom'
import Index from '../components/Index'
import List from '../components/List'
import TaskItem from '../components/ShowTask'

const Main = () => (
  <main>
    <Route path="/" exact component={Index} />
    <Route path="/list/" exact component={List} />
    <Route path="/list/:id" exact component={TaskItem} />
  </main>
)

export default Main
