import React from 'react'
import { connect } from 'react-redux'
import Task from './Task'

const mapStateToProps = ({ tasks }) => {
  return { tasks }
}

const List = ({ tasks }) => (
  <div
    style={{
      display: 'flex',
      flexDirection: 'column',
      alignItems: 'center',
    }}
  >
    <h2>Tasks</h2>
    <div
      className="tasks"
      style={{
        width: '500px',
      }}
    >
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
