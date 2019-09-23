import React from 'react'
import './taskStyle.css'

const Task = props => {
  const {
    name,
    timestamp,
    done,
    description,
    comments,
    priority,
  } = props.task
  return (
    <div className="task">
      <div className="task__header">
        <input type="checkBox" />
        <div className="task__name">{name}</div>
        <div className="task__priority">{priority}</div>
        <div className="task__edit">...</div>
        <div className="task__remove">+</div>
      </div>
      <div className="task__content">{description}</div>
      <div className="task__footer">
        <div className="task__date">{timestamp}</div>
        <div className="task__status">{done}</div>
        <div className="task__comment">{comments}</div>
      </div>
    </div>
  )
}
export default Task
