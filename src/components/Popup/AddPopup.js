import React, { PureComponent } from 'react'
import classNames from 'classnames'
import Form from '../Forms/Form'
import './popupStyle.scss'

class AddTaskPopup extends PureComponent {
  state = {
    task: {
      name: '',
      description: '',
      comment: '',
      priority: '',
    },
  }

  getDate = () => {
    const today = new Date()
    return `${today.getDate()}.${today.getMonth() +
      1}.${today.getFullYear()}`
  }

  handleSubmit = event => {
    event.preventDefault()
    const { addTask, lastTaskId, closePopup } = this.props

    const timestamp = this.getDate()
    const { name, comment, description, priority } = this.state.task
    const com = comment === '' ? [] : [comment]

    const task = {
      id: lastTaskId + 1,
      name,
      description,
      timestamp,
      done: false,
      comments: com,
      priority,
    }

    addTask(task)
    this.handleClearForm()

    closePopup()
  }

  handleClearForm = () => {
    this.setState({
      task: { name: '', description: '', comment: '', priority: '' },
    })
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
    const { name, description, comment, priority } = this.state.task
    const { showPopup, closePopup } = this.props

    const classnames = classNames({
      popup: true,
      'popup-show': showPopup,
    })

    return (
      <div className={classnames}>
        <div className="add-task">
          <div className="add-task__close" onClick={closePopup}>
            &times;
          </div>
          <h2>Create new task</h2>
          <Form
            name={name}
            description={description}
            comment={comment}
            priority={priority}
            handleSubmit={this.handleSubmit}
            handleClearForm={this.handleClearForm}
            handleChange={this.handleChange}
          />
        </div>
      </div>
    )
  }
}

export default AddTaskPopup
