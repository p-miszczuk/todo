import React from 'react'
import './taskStyle.scss'

const Task = ({ remove, task }) => {
  const {
    id,
    name,
    timestamp,
    done,
    description,
    comments,
    priority,
  } = task

  return (
    <div className="task">
      <div className="task__header">
        <input type="checkBox" name="isDone" />
        <div className="task__name">{name}</div>
        <div className="task__edit">&hellip;</div>
        <div className="task__remove" onClick={() => remove(id)}>
          +
        </div>
      </div>
      <div className="task__descrition">{description}</div>
      <div className="task__footer">
        <div className="task__date">{timestamp}</div>
        <div className="task__status">
          {done ? <span>Done</span> : <span>To do</span>}
        </div>
        {/* <div className="task__comment">{comments}</div> */}
      </div>
    </div>
  )
}
export default Task
