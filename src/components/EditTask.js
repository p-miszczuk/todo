import React, { PureComponent } from 'react'
import { connect } from 'react-redux'
import { editTask } from '../redux/reducers/todos/actions'
import Form from './Forms/Form'

const mapStateToProps = ({ todos }) => ({ tasks: todos.tasks })

const mapDispatchToProps = dispatch => ({
  edit: task => dispatch(editTask(task.id, task)),
})

class EditTask extends PureComponent {
  state = {
    id: 0,
    name: '',
    description: '',
    timestamp: '',
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
    const {
      id,
      name,
      description,
      timestamp,
      comment,
      priority,
    } = this.state

    const { edit, history, tasks } = this.props

    const comments = tasks.find(task => task.id === id).comments

    const comment_ =
      comment === ''
        ? [...comments]
        : comments.length
        ? [...comments, comment]
        : [comment]

    const task = {
      id,
      name,
      description,
      timestamp,
      done: false,
      comments: comment_,
      priority,
    }
    edit(task)
    history.push('/list/')
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

    const {
      id,
      name,
      description,
      timestamp,
      comment,
      priority,
    } = task

    const checkedComment = comment === undefined ? '' : comment

    this.setState({
      id,
      name,
      description,
      timestamp,
      comment: checkedComment,
      priority,
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
