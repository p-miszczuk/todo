import React from 'react'
import { Link } from 'react-router-dom'
import { Card, Badge } from 'react-bootstrap'
import classNames from 'classnames'
import Comment from './Comment'
import './taskStyle.scss'
import SnapshotState from 'jest-snapshot/build/State'

const medium = 'medium'
const high = 'high'

const Task = ({
  showDoneTasks,
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

  const classValues = classNames({
    task__name: true,
    'task__name--medium': priority === medium,
    'task__name--high': priority === high,
  })

  const classEdit = classNames({
    task__edit: true,
    'task__edit--display': showDoneTasks,
  })

  const classDisplay = classNames({
    task: true,
    'task--small': showDoneTasks,
  })

  return (
    <Card className={classDisplay} bg="dark" text="white">
      <Card.Header className="task__header">
        <input
          type="checkBox"
          name="isDone"
          checked={done}
          onChange={() => handleChangeStatus(id)}
        />
        <div className={classValues}>{name}</div>
        <div className={classEdit}>
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
          onClick={() => done && handleRemove(id)}
        >
          &times;
        </div>
      </Card.Header>
      <Card.Body>
        <Card.Text className="task__descrition">
          {description}
        </Card.Text>
        <Card.Text className="task__comments">
          <p>
            <Link to={`/list/${id}`}>
              <Badge variant="success" style={{ padding: '5px' }}>
                comments {comments.length}
              </Badge>
            </Link>
          </p>
          <div className="task__comments-list">
            <ul>
              {(setOneTask || showDoneTasks) &&
                comments.map((comment, index) => (
                  <Comment key={index} comment={comment} />
                ))}
            </ul>
          </div>
        </Card.Text>
      </Card.Body>
      <Card.Footer className="task__footer">
        <div className="task__date">{timestamp}</div>
        <div className="task__status">
          {done ? (
            <span className="task__done">Done</span>
          ) : (
            <span>To do</span>
          )}
        </div>
      </Card.Footer>
    </Card>
  )
}
export default Task
