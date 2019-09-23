import React, { PureComponent } from 'react'
import './popupStyle.scss'
import { CoverageMap } from 'istanbul-lib-coverage'

class AddTaskPopup extends PureComponent {
  state = {
    name: '',
    description: '',
    comment: '',
    priority: '',
  }

  handleSubmit = event => {
    event.preventDefault()
    console.log(event)
  }

  handleClearForm = () => {
    this.setState({
      name: '',
      description: '',
      comment: '',
      priority: '',
    })
  }

  handleTextChange = event => {
    this.setState({
      [event.target.name]: event.target.value,
    })
  }

  render() {
    const { name, description, comment, priority } = this.state
    return (
      <div className="popup">
        <div className="add-task">
          <h2>Create new task</h2>
          <form onSubmit={this.handleSubmit}>
            <label>
              Title:
              <input
                type="text"
                name="name"
                className="add-task__text"
                onChange={this.handleTextChange}
                value={name}
              />
            </label>
            <label>
              Description:
              <textarea
                name="description"
                className="add-task__description"
                onChange={this.handleTextChange}
                value={description}
              />
            </label>
            <label>
              Comment:
              <input
                type="text"
                name="comment"
                className="add-task__text"
                onChange={this.handleTextChange}
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
                  onChange={this.handleTextChange}
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
                  onChange={this.handleTextChange}
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
                  onChange={this.handleTextChange}
                />
                high
              </div>
            </div>
            <div className="add-task__buttons">
              <button type="submit">Add</button>
              <button onClick={this.handleClearForm}>Clear</button>
            </div>
          </form>
        </div>
      </div>
    )
  }
}

export default AddTaskPopup
