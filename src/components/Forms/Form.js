import React from 'react'
import Input from './Input'
import MainButton from '../Buttons/MainButton'

const Form = ({
  name,
  description,
  comment,
  priority,
  handleSubmit,
  handleChange,
  handleClearForm,
  editTask,
}) => (
  <form onSubmit={handleSubmit}>
    <Input
      label="Title"
      type="text"
      name="name"
      className="add-task__text"
      onChange={handleChange}
      value={name}
      required={true}
    />
    <Input
      label="Description"
      name="description"
      type="textarea"
      className="add-task__description"
      onChange={handleChange}
      value={description}
      required={true}
    />
    <Input
      label="Comment"
      type="text"
      name="comment"
      className="add-task__text"
      onChange={handleChange}
      value={comment}
    />
    <label>Priority:</label>
    <div>
      <div>
        <Input
          label="low"
          type="radio"
          name="priority"
          className="add-task__radio"
          value="low"
          checked={priority === 'low'}
          onChange={handleChange}
        />
      </div>
      <div>
        <Input
          label="medium"
          type="radio"
          name="priority"
          className="add-task__radio"
          value="medium"
          checked={priority === 'medium'}
          onChange={handleChange}
        />
      </div>
      <div>
        <Input
          label="high"
          type="radio"
          name="priority"
          className="add-task__radio"
          value="high"
          checked={priority === 'high'}
          onChange={handleChange}
        />
      </div>
    </div>
    <div className="add-task__buttons">
      <MainButton
        size="lg"
        button="outline-success"
        type="submit"
        text={editTask ? 'Edit' : 'Add'}
      />
      <MainButton
        size="lg"
        button="outline-info"
        type="button"
        onClick={handleClearForm}
        text="Clear"
      />
    </div>
  </form>
)

export default Form
