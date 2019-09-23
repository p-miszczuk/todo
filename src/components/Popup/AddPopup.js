import React from 'react'
import './popupStyle.scss'

const AddTaskPopup = () => (
  <div className="popup">
    <div className="add-task">
      <h2>Create new task</h2>
      <form>
        <label>
          Title:
          <input type="text" name="name" className="add-task__text" />
        </label>
        <label>
          Description:
          <textarea
            name="description"
            className="add-task__description"
          />
        </label>
        <label>
          Comment:
          <input
            type="text"
            name="comment"
            className="add-task__text"
          />
        </label>
        <label>Priority:</label>
        <div>
          <div>
            <input
              type="radio"
              className="add-task__radio"
              value="low"
            />
            low
          </div>
          <div>
            <input
              type="radio"
              className="add-task__radio"
              value="medium"
            />
            medium
          </div>
          <div>
            <input
              type="radio"
              className="add-task__radio"
              value="high"
            />
            high
          </div>
        </div>
        <div className="add-task__buttons">
          <button>Add</button>
          <button>Clear</button>
        </div>
      </form>
    </div>
  </div>
)

export default AddTaskPopup
