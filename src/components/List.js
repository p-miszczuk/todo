import React from 'react'
import { connect } from 'react-redux'
import Task from './Task/Task'
import AppPoup from './Popup'
import MainButton from './Buttons/MainButton'
import { removeTask, addTask } from '../redux/reducers/todos/actions'

class List extends React.Component {
  state = {
    showPopup: false,
  }

  handleRemoveTask = id => {
    const { remove } = this.props
    remove(id)
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

const mapStateToProps = ({ todos }) => {
  return { tasks: todos.tasks }
}

const mapDispatchToProps = {
  remove: removeTask,
  add: addTask,
}

export default connect(
  mapStateToProps,
  mapDispatchToProps,
)(List)
