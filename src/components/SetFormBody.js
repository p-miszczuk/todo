import React, { PureComponent } from 'react'
import { connect } from 'react-redux'
import EditTask from './Edit/EditTask'
import AddPopup from './Popup/AddPopup'
import { editTask, addTask } from '../redux/reducers/todos/actions'

const cleanForm = {
  name: '',
  description: '',
  comment: '',
  priority: 'low',
}

class SetFormBody extends PureComponent {
  state = {
    task: {
      name: '',
      description: '',
      comment: '',
      priority: 'low',
    },
  }

  static getDerivedStateFromProps(
    { showPopup, tasks, match },
    state,
  ) {
    let task

    if (showPopup === undefined) {
      task = tasks.find(task => task.id === parseInt(match.params.id))

      if (task && !state.task.timestamp)
        return {
          task,
        }
    }

    return null
  }

  getDate = () => {
    const today = new Date()
    return `${today.getDate()}.${today.getMonth() +
      1}.${today.getFullYear()}`
  }

  getLastTaskId = tasks =>
    tasks.length > 0 ? tasks[tasks.length - 1].id : 1

  setTaskValues = (comment, task, tasks) => {
    task.id = this.getLastTaskId(tasks) + 1
    task.timestamp = this.getDate()
    task.done = false
    task.comments = !comment ? [] : [comment]
    return task
  }

  handleSubmit = event => {
    event.preventDefault()

    const {
      addTask,
      closePopup,
      showPopup,
      editTask,
      history,
      tasks,
    } = this.props

    const { comment, comments } = this.state.task

    const task = {
      ...this.state.task,
    }

    delete task.comment

    if (showPopup) {
      const task_ = this.setTaskValues(comment, task, tasks)

      addTask(task_)
      this.handleClearForm()
      closePopup()
    } else {
      if (!!comment) comments.push(comment)

      editTask(task.id, task)
      history.push('/list/')
    }
  }

  handleClearForm = () => {
    const { showPopup } = this.props

    let task
    showPopup
      ? (task = { ...cleanForm })
      : (task = {
          ...this.state.task,
          ...cleanForm,
        })
    this.setState({ task })
  }

  handleChange = event => {
    const { name, value } = event.target
    const task = {
      ...this.state.task,
      [name]: value,
    }

    this.setState({
      task,
    })
  }

  render() {
    const { task } = this.state
    const { showPopup, closePopup, closeEditForm } = this.props

    if (showPopup)
      return (
        <AddPopup
          task={task}
          showPopup={showPopup}
          closePopup={closePopup}
          handleChange={this.handleChange}
          handleClearForm={this.handleClearForm}
          handleSubmit={this.handleSubmit}
        />
      )
    if (!closeEditForm)
      return (
        <EditTask
          task={task}
          handleChange={this.handleChange}
          handleClearForm={this.handleClearForm}
          handleSubmit={this.handleSubmit}
        />
      )

    return null
  }
}

const mapStateToProps = ({ todos }) => ({ tasks: todos.tasks })

const mapDispatchToProps = {
  editTask,
  addTask,
}

export default connect(
  mapStateToProps,
  mapDispatchToProps,
)(SetFormBody)
