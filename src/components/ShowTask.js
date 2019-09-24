import React, { PureComponent } from 'react'
import {
  removeTask,
  changeTaskStatus,
} from '../redux/reducers/todos/action'
import { connect } from 'react-redux'
import Task from './Task/Task'

const mapStateToProps = ({ todos }) => ({ tasks: todos.tasks })

const mapDispatchToProps = dispatch => ({
  remove: id => dispatch(removeTask(id)),
  changeStatus: id => dispatch(changeTaskStatus(id)),
})

class TaskItem extends PureComponent {
  getTask = () => {
    const { tasks, match } = this.props
    const task = tasks.find(
      task => task.id === parseInt(match.params.id),
    )
    return task
  }

  handleChangeStatus = id => {
    const { changeStatus, history } = this.props
    changeStatus(id)
  }

  handleRemove = id => {
    const { remove, history } = this.props
    remove(id)
    history.push('/list/')
  }

  render() {
    const task = this.getTask()

    return (
      <div style={{ width: '600px', margin: '0 auto' }}>
        <Task
          task={task}
          setOneTask
          handleRemove={this.handleRemove}
          handleChangeStatus={this.handleChangeStatus}
        />
      </div>
    )
  }
}

export default connect(
  mapStateToProps,
  mapDispatchToProps,
)(TaskItem)
