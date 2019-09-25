import React from 'react'
import { connect } from 'react-redux'
import Task from './Task/Task'
import AppPoup from './Popup'
import MainButton from './Buttons/MainButton'
import {
  removeTask,
  addTask,
  changeTaskStatus,
} from '../redux/reducers/todos/actions'

const mapStateToProps = ({ todos }) => {
  return { tasks: todos.tasks }
}

const mapDispatchToProps = dispatch => ({
  remove: id => dispatch(removeTask(id)),
  add: task => dispatch(addTask(task)),
  change: id => dispatch(changeTaskStatus(id)),
})

class List extends React.Component {
  state = {
    showPopup: false,
  }

  handleRemoveTask = id => {
    const { remove } = this.props
    remove(id)
  }

  handleChangeStatus = id => {
    const { change } = this.props
    change(id)
  }

  handleShowPopup = () => {
    this.setState({ showPopup: !this.state.showPopup })
  }

  getLastTaskId = tasks =>
    tasks.length > 0 && tasks[tasks.length - 1].id

  render() {
    const { tasks, add } = this.props
    const { showPopup } = this.state
    const lastTaskId = this.getLastTaskId(tasks)

    return (
      <div
        style={{
          display: 'flex',
          flexDirection: 'column',
          alignItems: 'center',
        }}
      >
        <h2>Tasks</h2>
        <MainButton
          style={{
            padding: '5px 15px',
          }}
          onClick={this.handleShowPopup}
          text="Add task"
        />
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
              handleRemove={this.handleRemoveTask}
              handleChangeStatus={this.handleChangeStatus}
            />
          ))}
          <AppPoup
            showPopup={showPopup}
            addTask={add}
            lastTaskId={lastTaskId}
            closePopup={this.handleShowPopup}
          />
        </div>
      </div>
    )
  }
}

export default connect(
  mapStateToProps,
  mapDispatchToProps,
)(List)
