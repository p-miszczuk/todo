import React from 'react'
import Form from './Forms/Form'

const EditTask = ({
  task,
  handleChange,
  handleClearForm,
  handleSubmit,
}) => {
  return (
    <div
      style={{
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
      }}
    >
      <h2>Edit task</h2>
      <div
        style={{
          marginTop: '10px',
          width: '400px',
          border: '1px solid #ccc',
          padding: '10px',
        }}
      >
        <Form
          editTask
          name={task.name}
          description={task.description}
          comment={task.comment}
          priority={task.priority}
          handleChange={handleChange}
          handleSubmit={handleSubmit}
          handleClearForm={handleClearForm}
        />
      </div>
    </div>
  )
}

export default EditTask
