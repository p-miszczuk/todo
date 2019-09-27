import React from 'react'
import { connect } from 'react-redux'
import Task from './Task/Task'
import SetFormBody from './SetFormBody'
import MainButton from './Buttons/MainButton'
import {
  removeTask,
  changeTaskStatus,
} from '../redux/reducers/todos/actions'
import { SNAPSHOT_VERSION_WARNING } from 'jest-snapshot/build/utils'

const LOW = 'low'
const HIGH = 'high'
const PATH = '/done/'

class List extends React.Component {
  state = {
    showPopup: false,
    showDoneTasks: false,
  }

  static getDerivedStateFromProps({ location }, state) {
    if (location.pathname === PATH)
      return {
        showDoneTasks: !state.showDoneTasks,
      }

    return null
  }

  sortTask = (taskA, taskB) => {
    if (taskA.props.task.done > taskB.props.task.done) return 1
    if (taskA.props.task.done < taskB.props.task.done) return -1
    if (taskA.props.task.priority === HIGH) return -1
    if (taskA.props.task.priority === LOW) return 1

    return 0
  }

  handleRemoveTask = id => {
    const { remove } = this.props
    remove(id)
  }

  handleShowPopup = () => {
    this.setState({
      showPopup: !this.state.showPopup,
    })
  }

  handleChangeStatus = id => {
    const { changeStatus } = this.props
    changeStatus(id)
  }

  render() {
    const { tasks, doneTasks } = this.props
    const { showPopup, showDoneTasks } = this.state
    console.log(this.props)
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
        {tasks.length <= 0 ? (
          <h6 style={{ marginTop: '25px', textAlign: 'center' }}>
            You don't have any tasks yet
          </h6>
        ) : (
          <h2>Your tasks</h2>
        )}
        <div style={{ position: 'absolute', left: '0', top: '0' }}>
          <MainButton
            button="success"
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
          {!showDoneTasks &&
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
              .sort((taskA, taskB) => this.sortTask(taskA, taskB))}
          {!!showDoneTasks &&
            doneTasks
              .map(task => (
                <Task
                  key={task.id}
                  task={task}
                  handleRemove={this.handleRemoveTask}
                  handleChangeStatus={this.handleChangeStatus}
                />
              ))
              .reverse()
              .sort((taskA, taskB) => this.sortTask(taskA, taskB))}
          <SetFormBody
            closeEditForm
            showPopup={showPopup}
            closePopup={this.handleShowPopup}
          />
        </div>
      </div>
    )
  }
}

const mapStateToProps = ({ todos }) => ({
  tasks: todos.tasks,
  doneTasks: todos.doneTasks,
})

const mapDispatchToProps = {
  remove: removeTask,
  changeStatus: changeTaskStatus,
}

export default connect(
  mapStateToProps,
  mapDispatchToProps,
)(List)
