import React, { PureComponent } from 'react'
import { connect } from 'react-redux'
import { editTask } from '../redux/reducers/todos/actions'
import Form from './Forms/Form'

class EditTask extends PureComponent {
  state = {
    task: {
      id: 0,
      name: '',
      description: '',
      timestamp: '',
      comment: '',
      priority: '',
    },
  }

  handleChange = event => {
    const { name, value } = event.target
    const task = {
      ...this.state.task,
      [name]: value,
    }
    this.setState({
      task,
    })
  }

  handleSubmit = event => {
    event.preventDefault()

    const { edit, history } = this.props

    const task = {
      ...this.state.task,
      done: false,
    }

    const { id } = this.state.task

    edit(id, task)
    history.push('/list/')
  }

  handleClearForm = () => {
    this.setState({
      task: { name: '', description: '', comment: '', priority: '' },
    })
  }

  componentDidMount() {
    const { match, tasks } = this.props
    const task = tasks.find(
      task => task.id === parseInt(match.params.id),
    )

    const { id, name, description, timestamp, priority } = task

    this.setState({
      task: { id, name, description, timestamp, priority },
    })
  }

  render() {
    const { name, description, comment, priority } = this.state.task

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

const mapStateToProps = ({ todos }) => ({ tasks: todos.tasks })

const mapDispatchToProps = {
  edit: editTask,
}

export default connect(
  mapStateToProps,
  mapDispatchToProps,
)(EditTask)
