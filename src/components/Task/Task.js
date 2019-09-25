import React from 'react'
import { Link } from 'react-router-dom'
import './taskStyle.scss'

const Task = ({
  handleRemove,
  task,
  setOneTask,
  handleChangeStatus,
}) => {
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
        <input
          type="checkBox"
          name="isDone"
          checked={done}
          onChange={() => handleChangeStatus(id)}
        />
        <div className="task__name">{name}</div>
        <div className="task__edit">
          <Link
            to={
              setOneTask && !done ? `/list/${id}/edit` : `/list/${id}`
            }
          >
            &hellip;
          </Link>
        </div>
        <div
          className="task__remove"
          onClick={() => handleRemove(id)}
        >
          &times;
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
