import React from 'react'
import classNames from 'classnames'
import Form from '../Forms/Form'
import './popupStyle.scss'

const AddPopup = ({
  showPopup,
  closePopup,
  task,
  handleChange,
  handleClearForm,
  handleSubmit,
}) => {
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
          name={task.name}
          description={task.description}
          comment={task.comment}
          priority={task.priority}
          handleSubmit={handleSubmit}
          handleClearForm={handleClearForm}
          handleChange={handleChange}
        />
      </div>
    </div>
  )
}

export default AddPopup
