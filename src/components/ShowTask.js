import React from 'react'
import Task from '../components/Task'
import { connect } from 'react-redux'

const mapStateToProps = ({ todos }) => ({ tasks: todos.tasks })

const TaskItem = ({ tasks, match }) => {
  const task = tasks.find(
    task => task.id === parseInt(match.params.id),
  )

  return (
    <div style={{ width: '600px', margin: '0 auto' }}>
      <Task task={task} setOneTask />
    </div>
  )
}

export default connect(mapStateToProps)(TaskItem)
