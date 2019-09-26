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
          position: 'relative',
          display: 'flex',
          flexDirection: 'column',
          alignItems: 'center',
          width: '600px',
          margin: '0 auto',
        }}
      >
        <h2>Tasks</h2>
        <div style={{ position: 'absolute', left: '0', top: '0' }}>
          <MainButton
            button="outline-success"
            size="lg"
            onClick={this.handleShowPopup}
            text="Add task"
          />
        </div>
        <div
          className="tasks"
          style={{
            width: '100%',
          }}
        >
          {tasks.length <= 0 ? (
            <h5 style={{ textAlign: 'center', marginTop: '15px' }}>
              You don't have any tasks
            </h5>
          ) : (
            tasks
              .map(task => (
                <Task
                  key={task.id}
                  task={task}
                  handleRemove={this.handleRemoveTask}
                  handleChangeStatus={this.handleChangeStatus}
                />
              ))
              .reverse()
          )}
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

const mapStateToProps = ({ todos }) => ({ tasks: todos.tasks })

const mapDispatchToProps = {
  remove: removeTask,
  add: addTask,
  change: changeTaskStatus,
}

export default connect(
  mapStateToProps,
  mapDispatchToProps,
)(List)
