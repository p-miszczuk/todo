import React, { PureComponent } from 'react'
import { connect } from 'react-redux'
import Form from './Form'

const mapStateToProps = ({ todos }) => ({ tasks: todos.tasks })

const mapDispatchToProps = dispatch => ({
  //   edit: task => dispatch(editTask(task)),
})

class EditTask extends PureComponent {
  state = {
    id: 0,
    name: '',
    description: '',
    comment: '',
    priority: '',
  }

  handleChange = event => {
    this.setState({
      [event.target.name]: event.target.value,
    })
  }

  handleSubmit = event => {
    event.preventDefault()
  }

  handleClearForm = () => {
    this.setState({
      name: '',
      description: '',
      comment: '',
      priority: '',
    })
  }

  componentDidMount() {
    const { match, tasks } = this.props
    const task = tasks.find(
      task => task.id === parseInt(match.params.id),
    )

    const { id, name, description, comment, priority } = task
    const checkedComment = comment === undefined ? '' : comment

    this.setState({
      id,
      name,
      description,
      comment: checkedComment,
      priority: priority,
    })
  }

  render() {
    const { name, description, comment, priority } = this.state

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
            name={name}
            description={description}
            comment={comment}
            priority={priority}
            handleChange={this.handleChange}
            handleSubmit={this.handleSubmit}
            handleClearForm={this.handleClearForm}
          />
        </div>
      </div>
    )
  }
}

export default connect(
  mapStateToProps,
  mapDispatchToProps,
)(EditTask)
