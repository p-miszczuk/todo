import React, { PureComponent } from 'react'
import { removeTask } from '../redux/reducers/todos/action'
import { connect } from 'react-redux'
import Task from './Task/Task'

const mapStateToProps = ({ todos }) => ({ tasks: todos.tasks })

const mapDispatchToProps = dispatch => ({
  remove: id => dispatch(removeTask(id)),
})

class TaskItem extends PureComponent {
  getTask = () => {
    const { tasks, match } = this.props
    const task = tasks.find(
      task => task.id === parseInt(match.params.id),
    )
    return task
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
        <Task task={task} handleRemove={this.handleRemove} />
      </div>
    )
  }
}

export default connect(
  mapStateToProps,
  mapDispatchToProps,
)(TaskItem)
