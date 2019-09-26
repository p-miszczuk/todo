import React from 'react'
import { connect } from 'react-redux'
import Task from './Task/Task'
import SetFormBody from './SetFormBody'
import MainButton from './Buttons/MainButton'
import {
  removeTask,
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
    const { tasks } = this.props
    const { showPopup } = this.state

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
          {tasks
            .map(task => (
              <Task
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

const mapStateToProps = ({ todos }) => ({ tasks: todos.tasks })

const mapDispatchToProps = {
  remove: removeTask,
  changeStatus: changeTaskStatus,
}

export default connect(
  mapStateToProps,
  mapDispatchToProps,
)(List)
