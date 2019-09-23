import React from 'react'
import { connect } from 'react-redux'
import Task from './Task'

const mapStateToProps = ({ tasks }) => {
  return { tasks }
}

const List = ({ tasks }) => (
  <div>
    <h2>Tasks</h2>
    <div className="tasks">
      {tasks.map(task => (
        <Task key={task.id} task={task} />
      ))}
    </div>
  </div>
)

export default connect(
  mapStateToProps,
  null,
)(List)
