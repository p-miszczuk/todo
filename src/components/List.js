import React from 'react'
import { connect } from 'react-redux'
import Task from './Task/Task'
import SetFormBody from './SetFormBody'
import MainButton from './Buttons/MainButton'
import {
  removeTask,
  removeDoneTask,
  changeTaskStatus,
} from '../redux/reducers/todos/actions'

const LOW = 'low'
const MEDIUM = 'medium'
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

  sortTasks = (taskA, taskB) => {
    return (
      (taskA.props.task.done > taskB.props.task.done && 1) ||
      (taskA.props.task.done < taskB.props.task.done && -1) ||
      (taskA.props.task.priority === HIGH &&
        taskB.props.task.priority === MEDIUM &&
        -1) ||
      (taskA.props.task.priority === MEDIUM &&
        taskB.props.task.priority === LOW &&
        -1) ||
      (taskA.props.task.priority === HIGH &&
        taskB.props.task.priority === LOW &&
        -1) ||
      0
    )
  }

  handleRemoveTask = id => {
    const { removeActive, removeDone } = this.props
    const { showDoneTasks } = this.state

    showDoneTasks
      ? removeDone(id) && this.setState({ showDoneTasks: false })
      : removeActive(id)
  }

  handleShowPopup = () => {
    this.setState({
      showPopup: !this.state.showPopup,
    })
  }

  handleChangeStatus = id => {
    const { changeStatus } = this.props
    const { showDoneTasks } = this.state

    !showDoneTasks && changeStatus(id)
  }

  render() {
    const { tasks, doneTasks } = this.props
    const { showPopup, showDoneTasks } = this.state

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
        {(!showDoneTasks && tasks.length <= 0) ||
        (showDoneTasks && doneTasks.length <= 0) ? (
          <h6 style={{ marginTop: '25px', textAlign: 'center' }}>
            {!showDoneTasks
              ? `You don't have any tasks yet`
              : `It's clean :)`}
          </h6>
        ) : (
          <h2>
            {!showDoneTasks ? `Your tasks` : `Your finished tasks`}
          </h2>
        )}
        {!showDoneTasks && (
          <div style={{ position: 'absolute', left: '0', top: '0' }}>
            <MainButton
              button="success"
              size="lg"
              onClick={this.handleShowPopup}
              text="Add task"
            />
          </div>
        )}
        <div
          className="tasks"
          style={{
            width: '100%',
          }}
        >
          {!showDoneTasks
            ? tasks
                .map(task => (
                  <Task
                    key={task.id}
                    task={task}
                    handleRemove={this.handleRemoveTask}
                    handleChangeStatus={this.handleChangeStatus}
                  />
                ))
                .reverse()
                .sort((taskA, taskB) => this.sortTasks(taskA, taskB))
            : doneTasks
                .map(task => (
                  <Task
                    showDoneTasks={showDoneTasks}
                    key={task.id}
                    task={task}
                    handleRemove={this.handleRemoveTask}
                    handleChangeStatus={this.handleChangeStatus}
                  />
                ))
                .reverse()}
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
  removeActive: removeTask,
  removeDone: removeDoneTask,
  changeStatus: changeTaskStatus,
}

export default connect(
  mapStateToProps,
  mapDispatchToProps,
)(List)
