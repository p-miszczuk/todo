import React, { PureComponent } from 'react'
import classNames from 'classnames'
import Form from '../Forms/Form'
import './popupStyle.scss'

class AddTaskPopup extends PureComponent {
  state = {
    name: '',
    description: '',
    comment: '',
    priority: '',
  }

  getDate = () => {
    const today = new Date()
    return `${today.getDay()}.${today.getMonth()}.${today.getFullYear()}`
  }

  handleSubmit = event => {
    event.preventDefault()
    const { addTask, lastTaskId, closePopup } = this.props
    const { name, description, comment, priority } = this.state
    const timestamp = this.getDate()

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

    this.setState({
      name: '',
      description: '',
      comment: '',
      priority: '',
    })

    closePopup()
  }

  handleClearForm = () => {
    this.setState({
      name: '',
      description: '',
      comment: '',
      priority: '',
    })
  }

  handleChange = event => {
    this.setState({
      [event.target.name]: event.target.value,
    })
  }

  render() {
    const { name, description, comment, priority } = this.state
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
