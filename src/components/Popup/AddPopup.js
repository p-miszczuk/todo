import React, { PureComponent } from 'react'
import MainButton from '../Buttons/MainButton'
import './popupStyle.scss'

class AddTaskPopup extends PureComponent {
  state = {
    name: '',
    description: '',
    comment: '',
    priority: '',
  }

  handleSubmit = event => {
    event.preventDefault()
    const { addTask, lastTaskId, closePopup } = this.props
    const { name, description, comment, priority } = this.state
    const today = new Date()
    const timestamp = `${today.getDay()}.${today.getMonth()}.${today.getFullYear()}`

    const task = {
      id: lastTaskId + 1,
      name,
      description,
      timestamp,
      done: false,
      comment,
      priority,
    }

    addTask(task)
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
  //add classnames!!!

  render() {
    const { name, description, comment, priority } = this.state
    const { showPopup, closePopup } = this.props

    return (
      <div
        className="popup"
        style={showPopup ? { display: 'block' } : { display: 'none' }}
      >
        <div className="add-task">
          <div className="add-task__close" onClick={closePopup}>
            +
          </div>
          <h2>Create new task</h2>
          <form onSubmit={this.handleSubmit}>
            <label>
              Title:
              <input
                type="text"
                name="name"
                className="add-task__text"
                onChange={this.handleChange}
                value={name}
                required={true}
              />
            </label>
            <label>
              Description:
              <textarea
                name="description"
                className="add-task__description"
                onChange={this.handleChange}
                value={description}
                required={true}
              />
            </label>
            <label>
              Comment:
              <input
                type="text"
                name="comment"
                className="add-task__text"
                onChange={this.handleChange}
                value={comment}
              />
            </label>
            <label>Priority:</label>
            <div>
              <div>
                <input
                  type="radio"
                  name="priority"
                  className="add-task__radio"
                  value="low"
                  checked={priority === 'low'}
                  onChange={this.handleChange}
                />
                low
              </div>
              <div>
                <input
                  type="radio"
                  name="priority"
                  className="add-task__radio"
                  value="medium"
                  checked={priority === 'medium'}
                  onChange={this.handleChange}
                />
                medium
              </div>
              <div>
                <input
                  type="radio"
                  name="priority"
                  className="add-task__radio"
                  value="high"
                  checked={priority === 'high'}
                  onChange={this.handleChange}
                />
                high
              </div>
            </div>
            <div className="add-task__buttons">
              <MainButton
                type="submit"
                style={{ padding: '10px 25px' }}
                text="Add"
              />
              <MainButton
                onClick={this.handleClearForm}
                style={{ padding: '10px 25px' }}
                text="Clear"
              />
            </div>
          </form>
        </div>
      </div>
    )
  }
}

export default AddTaskPopup
