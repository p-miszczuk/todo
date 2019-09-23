import React, { PureComponent } from 'react'
import { connect } from 'react-redux'
import Task from './Task'
import { removeTask } from '../redux/actions/appActions'

const mapStateToProps = ({ tasks }) => {
  return { tasks }
}

const mapDispatchToProps = dispatch => {
  return {
    remove: id => dispatch(removeTask(id)),
  }
}

class List extends PureComponent {
  handleRemoveTask = id => {
    const { remove } = this.props
    remove(id)
  }

  render() {
    const { tasks } = this.props
    return (
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
            <Task
              key={task.id}
              task={task}
              remove={this.handleRemoveTask}
            />
          ))}
        </div>
      </div>
    )
  }
}
export default connect(
  mapStateToProps,
  mapDispatchToProps,
)(List)
