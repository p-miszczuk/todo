import React from 'react'
import Input from './Popup/Input'
import MainButton from '../components/Buttons/MainButton'

const Form = ({
  name,
  description,
  comment,
  priority,
  handleSubmit,
  handleChange,
  handleClearForm,
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
    <label>
      Description:
      <textarea
        name="description"
        className="add-task__description"
        onChange={handleChange}
        value={description}
        required={true}
      />
    </label>
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
          label
          type="radio"
          name="priority"
          className="add-task__radio"
          value="high"
          checked={priority === 'high'}
          onChange={handleChange}
        />
        high
      </div>
    </div>
    <div className="add-task__buttons">
      <MainButton
        type="submit"
        style={{ padding: '10px 25px' }}
        text="Add"
      />
      <MainButton
        type="button"
        onClick={handleClearForm}
        style={{ padding: '10px 25px' }}
        text="Clear"
      />
    </div>
  </form>
)

export default Form
