import React from 'react'
import { Card } from 'react-bootstrap'
import Form from '../Forms/Form'

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
      <Card bg="dark" text="light">
        <h2 style={{ margin: '0 auto' }}>Edit task</h2>
        <div
          style={{
            marginTop: '10px',
            maxWidth: '500px',
            width: '100%',
            padding: '10px',
          }}
        >
          <Form
            labelStyle={{ width: '100%' }}
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
      </Card>
    </div>
  )
}

export default EditTask
