import React, { PureComponent } from 'react'
import { removeTask } from '../redux/reducers/todos/actions'
import { connect } from 'react-redux'
import Task from './Task/Task'

class ShowTask extends PureComponent {
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

const mapStateToProps = ({ todos }) => ({ tasks: todos.tasks })

const mapDispatchToProps = {
  remove: removeTask,
}

export default connect(
  mapStateToProps,
  mapDispatchToProps,
)(ShowTask)
